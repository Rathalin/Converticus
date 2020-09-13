"use strict";

/*

@author:        Daniel Flockert
@last_edited:   11.09.2020

Unit
Contains id and name of a unit

*/


export class Unit {

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }


    toString() {
        return `{ "id": ${this.id}, "name": ${this.name} }`;
    }


    equals(unit) {
        if (!unit instanceof Unit) {
            return false;
        }
        return this.id === unit.id || this.name === unit.name;
    }

}