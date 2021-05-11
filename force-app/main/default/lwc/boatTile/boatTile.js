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
export default class BoatTile extends LightningElement {
    boat;
    selectedBoatId;

    // Getter for dynamically setting the background image for the picture
    get backgroundStyle() { }

    // Getter for dynamically setting the tile class based on whether the
    // current boat is selected
    get tileClass() { }

    // Fires event with the Id of the boat that has been selected.
    selectBoat() { }
}
