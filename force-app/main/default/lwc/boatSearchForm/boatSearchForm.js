/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 05-12-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   05-11-2021   Vrushabh Uprikar   Initial Version
**/
// imports
import { LightningElement, track, wire } from 'lwc';
// import getBoatTypes from the BoatDataService => getBoatTypes method';
import getBoatTypes from '@salesforce/apex/BoatDataService.getBoatTypes';
export default class BoatSearchForm extends LightningElement
{
    @track selectedBoatTypeId = '';
    value = '';
    // Private
    error = undefined;
    label;
    @track searchOptions;

    // Wire a custom Apex method
    @wire(getBoatTypes)
    boatTypes({ error, data })
    {
        if (data)
        {
            console.log(data);
            this.searchOptions = data.map(type => {
                return {
                    label: type.Name,
                    value: type.Id
                };
            });
            this.searchOptions.unshift({ label: 'All Types', value: '' });
        } else if (error)
        {
            this.searchOptions = undefined;
            this.error = error;
        }
    }

    // Fires event that the search option has changed.
    // passes boatTypeId (value of this.selectedBoatTypeId) in the detail
    handleSearchOptionChange(event)
    {
        event.preventDefault();
        this.selectedBoatTypeId = event.detail.value;
        // Create the const searchEvent
        const searchEvent = new CustomEvent('search', {
            detail: { boatTypeId: this.selectedBoatTypeId }
        });
        // searchEvent must be the new custom event search
        searchEvent;
        this.dispatchEvent(searchEvent);
    }
}
