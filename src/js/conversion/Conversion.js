"use strict";

/*

@author:        Daniel Flockert
@last_edited:   11.09.2020

Conversion 
Contains the combination between two units and their formula to calculate the conversion

*/


export class Conversion {

    constructor(conversionId1, conversionId2, formula, inverseFormula) {
        this.id1 = conversionId1;
        this.id2 = conversionId2;
        this.formula = formula;
        this.inverseFormula = inverseFormula;
    }


    toString() {
        return `{ "id1": ${this.id1}, "id2": ${this.id2}, 
            "formula": ${this.formula}, "inverseFormula": ${this.inverseFormula} }`;
    }


    equals(conversion) {
        if (!conversion instanceof Conversion) {
            return false;
        }
        return this.id1 === conversion.id1 && this.id2 === conversion.id2;
    }

}