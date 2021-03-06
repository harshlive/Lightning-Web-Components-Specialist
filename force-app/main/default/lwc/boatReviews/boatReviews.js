/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 05-13-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   05-11-2021   Vrushabh Uprikar   Initial Version
**/
import { LightningElement, api, track } from 'lwc';
import getAllReviews from '@salesforce/apex/BoatDataService.getAllReviews';
import { NavigationMixin } from 'lightning/navigation';
// imports
export default class BoatReviews extends NavigationMixin(LightningElement) // main chnage is here in extends
{
    // Private
    boatId;
    error;
    @track boatReviews;
    isLoading;

    // Getter and Setter to allow for logic to run on recordId change
    @api
    get recordId()
    {
        return this.boatId;
    }
    set recordId(value)
    {
        //sets boatId attribute
        this.setAttribute('boatId', value);
        //sets boatId assignment
        this.boatId = value;
        //get reviews associated with boatId
        this.getReviews();
    }

    // Getter to determine if there are reviews to display
    get reviewsToShow()
    {
        console.log('this.boatReviews  ==> ' + this.boatReviews);
        return (this.boatReviews != undefined && this.boatReviews != null && this.boatReviews != '') ? true : false;
    }

    // Public method to force a refresh of the reviews invoking getReviews
    @api
    refresh()
    {
        this.getReviews();
    }

    // Imperative Apex call to get reviews for given boat
    // returns immediately if boatId is empty or null
    // sets isLoading to true during the process and false when it’s completed
    // Gets all the boatReviews from the result, checking for errors.
    getReviews()
    {
        console.log(' refresh getReviews ' + this.boatId);
        this.isLoading = true;
        getAllReviews({ boatId: this.boatId })
            .then(result => {
                this.boatReviews = result;
                this.isLoading = false;
                console.log(' == getAllReviews == ');
            })
            .catch(error => {
                this.boatReviews = undefined;
                this.error = error;
            });
    }

    // Helper method to use NavigationMixin to navigate to a given record on click
    navigateToRecord(event)
    {
        const userId = event.target.dataset.recordId
        // Generate a URL to a User record page
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: userId,
                objectApiName: 'User',
                actionName: 'view',
            },
        });
    }
}
