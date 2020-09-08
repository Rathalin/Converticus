"use strict";
/*



*/

import { Conversion } from "./Conversion.js";
import { Unit } from "./Unit.js";


export class Category {


    constructor(name) {
        this.id = 0;
        this.name = name;
        this.units = [];
        this.conversions = [];
        this.nextUnitId = 0;
    }


    addUnit(name) {
        // check if unit already exists
        let unit = new Unit(-1, name);
        if (this.units.find(cU => cU.equals(unit))) {
            throw `Unit with name ${name} already exists!`;
        }

        // set id
        unit.id = this.nextUnitId++;
        // add unit to array
        this.units.push(unit);
        // add recursive conversion
        this.addConversionByName(unit.name, unit.name, 1.0);
        return true;
    }


    addConversionById(id1, id2, factor) {
        let conversion = new Conversion(id1, id2, factor);
        // check if conversion already exists
        if (this.conversions.find(conv => conv.equals(conversion))) {
            throw `Conversion from ${conversion.id1} to ${conversion.id2} already exists!`;
        }

        // add converions
        this.conversions.push(conversion);
    }


    addConversionByName(name1, name2, factor) {
        // check if units exist
        let unit1 = this.units.find(cu => cu.name === name1);
        if (!unit1) {
            throw `Couldn't find Unit with name '${name1}'`;
        }
        let unit2 = this.units.find(cu => cu.name === name2);
        if (!unit2) {
            throw `Couldn't find Unit with name '${name2}'`;
        }

        // add conversion
        this.addConversionById(unit1.id, unit2.id, factor);
    }


    findConversionFactor(unit1, unit2) {
        // find normal id combination
        let conv = this.conversions.find(conv => conv.id1 === unit1.id && conv.id2 === unit2.id);
        if (conv) {
            return conv.factor;
        }
        // find reverse id combination
        conv = this.conversions.find(conv => conv.id2 === unit1.id && conv.id1 === unit2.id);
        if (conv) {
            return 1 / conv.factor;
        }
        throw `Conversion missing for "${unit1.name}" to "${unit2.name}"!`;
    }

}