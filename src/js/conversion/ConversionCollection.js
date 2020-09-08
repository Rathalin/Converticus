"use strict";

/*

@author:    Daniel Flockert
@date:      08.09.2020

Conversion Collection
Holds all categories with units and their conversions in it
Also holds the default collection

*/

import { Category } from "./Category.js";

export class ConversionCollection {
    constructor() {
        this.categories = [];
        this.nextCategoryId = 0;
    }

    addCategory(category) {
        // check category type
        if (!category instanceof Category) {
            throw `Param not instance of 'Category'!`;
        }

        // set id
        category.id = this.nextCategoryId++;
        // add category to array
        this.categories.push(category);
    }


    /**
     * Returns a complete collection with all categories that have been implemented for use
     */
    static getFullCollection() {
        let collection = new ConversionCollection();
        
        collection.addCategory(ConversionCollection.getCategoryLength());
        collection.addCategory(ConversionCollection.getCategorySpeed());


        return collection;
    }


    /**
     * Returns the full category Length with all units and conversions in it
     */
    static getCategoryLength() {
        let categoryLength = new Category("Length");

        categoryLength.addUnit("Kilometer");
        categoryLength.addUnit("Meter");
        categoryLength.addUnit("Centimeter");
        categoryLength.addUnit("Millimeter");
        categoryLength.addUnit("Micrometer");
        categoryLength.addUnit("Nanometer");
        categoryLength.addUnit("Mile");
        categoryLength.addUnit("Yard");
        categoryLength.addUnit("Foot");
        categoryLength.addUnit("Inches");
        categoryLength.addUnit("Nautical Mile");

        categoryLength.addConversionByName("Kilometer", "Meter", val => val * Math.pow(10, 3));
        categoryLength.addConversionByName("Kilometer", "Centimeter", val => val * Math.pow(10, 5));
        categoryLength.addConversionByName("Kilometer", "Millimeter", val => val * Math.pow(10, 6));
        categoryLength.addConversionByName("Kilometer", "Micrometer", val => val * Math.pow(10, 9));
        categoryLength.addConversionByName("Kilometer", "Nanometer", val => val * Math.pow(10, 12));
        categoryLength.addConversionByName("Kilometer", "Mile", val => val * 0.621371);
        categoryLength.addConversionByName("Kilometer", "Yard", val => val * 1093.1);
        categoryLength.addConversionByName("Kilometer", "Foot", val => val * 3280.84);
        categoryLength.addConversionByName("Kilometer", "Inches", val => val * 39370.1);
        categoryLength.addConversionByName("Kilometer", "Nautical Mile", val => val * 0.539957);

        categoryLength.addConversionByName("Meter", "Centimeter", val => val * Math.pow(10, 2));
        categoryLength.addConversionByName("Meter", "Millimeter", val => val * Math.pow(10, 3));
        categoryLength.addConversionByName("Meter", "Micrometer", val => val * Math.pow(10, 6));
        categoryLength.addConversionByName("Meter", "Nanometer", val => val * Math.pow(10, 9));
        categoryLength.addConversionByName("Meter", "Mile", val => val * (1.0 / 1609));
        categoryLength.addConversionByName("Meter", "Yard", val => val * 1.09361);
        categoryLength.addConversionByName("Meter", "Foot", val => val * 3.28084);
        categoryLength.addConversionByName("Meter", "Inches", val => val * 39.37);
        categoryLength.addConversionByName("Meter", "Nautical Mile", val => val * (1.0 / 1852));

        categoryLength.addConversionByName("Centimeter", "Millimeter", val => val * Math.pow(10, 1));
        categoryLength.addConversionByName("Centimeter", "Micrometer", val => val * Math.pow(10, 4));
        categoryLength.addConversionByName("Centimeter", "Nanometer", val => val * Math.pow(10, 7));
        categoryLength.addConversionByName("Centimeter", "Mile", val => val * (1.0 / 160934));
        categoryLength.addConversionByName("Centimeter", "Yard", val => val * (1.0 / 91.44));
        categoryLength.addConversionByName("Centimeter", "Foot", val => val * (1.0 / 30.48));
        categoryLength.addConversionByName("Centimeter", "Inches", val => val * (1.0 / 2.54));
        categoryLength.addConversionByName("Centimeter", "Nautical Mile", val => val * (1.0 / 185200));

        categoryLength.addConversionByName("Millimeter", "Micrometer", val => val * Math.pow(10, 3));
        categoryLength.addConversionByName("Millimeter", "Nanometer", val => val * Math.pow(10, 6));
        categoryLength.addConversionByName("Millimeter", "Mile", val => val * (1.0 / (1.60934 * Math.pow(10, 6))));
        categoryLength.addConversionByName("Millimeter", "Yard", val => val * (1.0 / 914.4));
        categoryLength.addConversionByName("Millimeter", "Foot", val => val * (1.0 / 304.8));
        categoryLength.addConversionByName("Millimeter", "Inches", val => val * (1.0 / 25.4));
        categoryLength.addConversionByName("Millimeter", "Nautical Mile", val => val * (1.0 / (1.852 * Math.pow(10, 6))));

        categoryLength.addConversionByName("Micrometer", "Nanometer", val => val * Math.pow(10, 6));
        categoryLength.addConversionByName("Micrometer", "Mile", val => val * (1.0 / (1.60934 * Math.pow(10, 6))));
        categoryLength.addConversionByName("Micrometer", "Yard", val => val * (1.0 / 914.4));
        categoryLength.addConversionByName("Micrometer", "Foot", val => val * (1.0 / 304.8));
        categoryLength.addConversionByName("Micrometer", "Inches", val => val * (1.0 / 25.4));
        categoryLength.addConversionByName("Micrometer", "Nautical Mile", val => val * (1.0 / (1.852 * Math.pow(10, 6))));

        categoryLength.addConversionByName("Nanometer", "Mile", val => val * (1.0 / (1.60934 * Math.pow(10, 12))));
        categoryLength.addConversionByName("Nanometer", "Yard", val => val * (1.0 / (9.144 * Math.pow(10, 8))));
        categoryLength.addConversionByName("Nanometer", "Foot", val => val * (1.0 / (3.048 * Math.pow(10, 8))));
        categoryLength.addConversionByName("Nanometer", "Inches", val => val * (1.0 / (2.54 * Math.pow(10, 7))));
        categoryLength.addConversionByName("Nanometer", "Nautical Mile", val => val * (1.0 / (1.852 * Math.pow(10, 12))));
        
        categoryLength.addConversionByName("Mile", "Yard", val => val * 1760.0);
        categoryLength.addConversionByName("Mile", "Foot", val => val * 5280.0);
        categoryLength.addConversionByName("Mile", "Inches", val => val * 63360.0);
        categoryLength.addConversionByName("Mile", "Nautical Mile", val => val * (1.0 / 1.151));

        categoryLength.addConversionByName("Yard", "Foot", val => val * 3.0);
        categoryLength.addConversionByName("Yard", "Inches", val => val * 36.0);
        categoryLength.addConversionByName("Yard", "Nautical Mile", val => val * (1.0 / 2025.0));
        
        categoryLength.addConversionByName("Foot", "Inches", val => val * 12.0);
        categoryLength.addConversionByName("Foot", "Nautical Mile", val => val * (1.0 / 6076.0));
        
        categoryLength.addConversionByName("Inches", "Nautical Mile", val => val * (1.0 / 72913.0));

        return categoryLength;
    }


    /**
     * Returns the full category Speed with all units and conversions in it
     */
    static getCategorySpeed() {
        let categorySpeed = new Category("Speed");

        categorySpeed.addUnit("Miles per Hour");
        categorySpeed.addUnit("Feet per Second");
        categorySpeed.addUnit("Meters per Second");
        categorySpeed.addUnit("Kilometers per Hour");
        categorySpeed.addUnit("Knots");

        categorySpeed.addConversionByName("Miles per Hour", "Feet per Second", val => val * (1.467));
        categorySpeed.addConversionByName("Miles per Hour", "Meters per Second", val => val * (1.0/ 2.237));
        categorySpeed.addConversionByName("Miles per Hour", "Kilometers per Hour", val => val * (1.609));
        categorySpeed.addConversionByName("Miles per Hour", "Knots", val => val * (1.0 / 1.151));
        
        categorySpeed.addConversionByName("Feet per Second", "Meters per Second", val => val * (1.0 / 3.281));
        categorySpeed.addConversionByName("Feet per Second", "Kilometers per Hour", val => val * (1.097));
        categorySpeed.addConversionByName("Feet per Second", "Knots", val => val * (1.0 / 1.688));
        
        categorySpeed.addConversionByName("Meters per Second", "Kilometers per Hour", val => val * (3.6));
        categorySpeed.addConversionByName("Meters per Second", "Knots", val => val * (1.944));

        categorySpeed.addConversionByName("Kilometers per Hour", "Knots", val => val * (1.0 / 1.852));

        return categorySpeed;
    }
    



}