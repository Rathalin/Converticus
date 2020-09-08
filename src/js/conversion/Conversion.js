"use strict";

/*



*/

export class Conversion {

    constructor(conversionId1, conversionId2, conversionFactor) {
        this.id1 = conversionId1;
        this.id2 = conversionId2;
        this.factor = conversionFactor;
    }


    equals(conversion) {
        if (!conversion instanceof Conversion) {
            return false;
        }
        return this.id1 === conversion.id1 && this.id2 === conversion.id2;
    }


    toString() {
        return `Conversion: { id1: ${this.id1}, id2: ${this.id2}, factor: ${this.factor}}`;
    }

}