/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 05-11-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   05-11-2021   Vrushabh Uprikar   Initial Version
**/
// imports
import { LightningElement } from 'lwc';

export default class BoatSearch extends LightningElement
{
    isLoading = false;

    // Handles loading event
    handleLoading() { }

    // Handles done loading event
    handleDoneLoading() { }

    // Handles search boat event
    // This custom event comes from the form
    searchBoats(event) { }

    createNewBoat() { }
}
