"use strict";

/*

@author:    Daniel Flockert
@date:      08.09.2020

Unit
Contains id and name of a unit

*/


export class Unit {

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }


    equals(unit) {
        if (!unit instanceof Unit) {
            return false;
        }
        return this.id === unit.id || this.name === unit.name;
    }


    toString() {
        return `Unit: { id: ${this.id}, name: ${this.name}}`;
    }

}