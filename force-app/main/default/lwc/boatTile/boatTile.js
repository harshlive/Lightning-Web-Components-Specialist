/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 05-12-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   05-11-2021   Vrushabh Uprikar   Initial Version
**/
import { api, LightningElement } from 'lwc';
const TILE_WRAPPER_SELECTED_CLASS = 'tile-wrapper selected';
const TILE_WRAPPER_UNSELECTED_CLASS = 'tile-wrapper';
// imports
export default class BoatTile extends LightningElement {
    @api boat;
    @api selectedBoatId;

    // Getter for dynamically setting the background image for the picture
    get backgroundStyle()
    { 
        return `background-image:url(${this.boat.Picture__c})`;
    }

    // Getter for dynamically setting the tile class based on whether the
    // current boat is selected
    get tileClass()
    {
        return this.selectedBoatId ? TILE_WRAPPER_SELECTED_CLASS : TILE_WRAPPER_UNSELECTED_CLASS;
        /**
         * IF this.selectedBoatId != null then return tile-wrapper selected
         * else, return tile-wrapper.
         */

    }

    // Fires event with the Id of the boat that has been selected.
    selectBoat()
    {
        // Toggle class
        this.selectedBoatId = !this.selectedBoatId;
        const boatselect = new CustomEvent('boatselect', {
            detail: { boatId: this.boat.Id }
        });
        this.dispatchEvent(boatselect);
    }   

}
