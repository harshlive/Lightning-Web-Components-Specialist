/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 05-11-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   05-11-2021   Vrushabh Uprikar   Initial Version
**/
import { LightningElement } from 'lwc';

// imports
// import getSimilarBoats
export default class SimilarBoats extends LightningElement {
    // Private
    currentBoat;
    relatedBoats;
    boatId;
    error;

    // public
    get recordId() {
        // returns the boatId
    }
    set recordId(value) {
        // sets the boatId value
        // sets the boatId attribute
    }

    // public
    similarBy;

    // Wire custom Apex call, using the import named getSimilarBoats
    // Populates the relatedBoats list
    similarBoats({ error, data }) { }
    get getTitle() {
        return 'Similar boats by ' + this.similarBy;
    }
    get noBoats() {
        return !(this.relatedBoats && this.relatedBoats.length > 0);
    }

    // Navigate to record page
    openBoatDetailPage(event) { }
}
