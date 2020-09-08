"use strict";

/*
Conversion Collection
Holds all categories with units and their conversions in it
Also holds the default collection

@author:    Daniel Flockert
@date:      07.09.2020
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
        collection.addCategory(ConversionCollection.getCategoryDatasize());


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

        categoryLength.addConversionByName("Kilometer", "Meter", Math.pow(10, 3));
        categoryLength.addConversionByName("Kilometer", "Centimeter", Math.pow(10, 5));
        categoryLength.addConversionByName("Kilometer", "Millimeter", Math.pow(10, 6));
        categoryLength.addConversionByName("Kilometer", "Micrometer", Math.pow(10, 9));
        categoryLength.addConversionByName("Kilometer", "Nanometer", Math.pow(10, 12));
        categoryLength.addConversionByName("Kilometer", "Mile", 0.621371);
        categoryLength.addConversionByName("Kilometer", "Yard", 1093.1);
        categoryLength.addConversionByName("Kilometer", "Foot", 3280.84);
        categoryLength.addConversionByName("Kilometer", "Inches", 39370.1);
        categoryLength.addConversionByName("Kilometer", "Nautical Mile", 0.539957);

        categoryLength.addConversionByName("Meter", "Centimeter", Math.pow(10, 2));
        categoryLength.addConversionByName("Meter", "Millimeter", Math.pow(10, 3));
        categoryLength.addConversionByName("Meter", "Micrometer", Math.pow(10, 6));
        categoryLength.addConversionByName("Meter", "Nanometer", Math.pow(10, 9));
        categoryLength.addConversionByName("Meter", "Mile", 1.0 / 1609);
        categoryLength.addConversionByName("Meter", "Yard", 1.09361);
        categoryLength.addConversionByName("Meter", "Foot", 3.28084);
        categoryLength.addConversionByName("Meter", "Inches", 39.37);
        categoryLength.addConversionByName("Meter", "Nautical Mile", 1.0 / 1852);

        categoryLength.addConversionByName("Centimeter", "Millimeter", Math.pow(10, 1));
        categoryLength.addConversionByName("Centimeter", "Micrometer", Math.pow(10, 4));
        categoryLength.addConversionByName("Centimeter", "Nanometer", Math.pow(10, 7));
        categoryLength.addConversionByName("Centimeter", "Mile", 1.0 / 160934);
        categoryLength.addConversionByName("Centimeter", "Yard", 1.0 / 91.44);
        categoryLength.addConversionByName("Centimeter", "Foot", 1.0 / 30.48);
        categoryLength.addConversionByName("Centimeter", "Inches", 1.0 / 2.54);
        categoryLength.addConversionByName("Centimeter", "Nautical Mile", 1.0 / 185200);

        categoryLength.addConversionByName("Millimeter", "Micrometer", Math.pow(10, 3));
        categoryLength.addConversionByName("Millimeter", "Nanometer", Math.pow(10, 6));
        categoryLength.addConversionByName("Millimeter", "Mile", 1.0 / (1.60934 * Math.pow(10, 6)));
        categoryLength.addConversionByName("Millimeter", "Yard", 1.0 / 914.4);
        categoryLength.addConversionByName("Millimeter", "Foot", 1.0 / 304.8);
        categoryLength.addConversionByName("Millimeter", "Inches", 1.0 / 25.4);
        categoryLength.addConversionByName("Millimeter", "Nautical Mile", 1.0 / (1.852 * Math.pow(10, 6)));

        categoryLength.addConversionByName("Micrometer", "Nanometer", Math.pow(10, 6));
        categoryLength.addConversionByName("Micrometer", "Mile", 1.0 / (1.60934 * Math.pow(10, 6)));
        categoryLength.addConversionByName("Micrometer", "Yard", 1.0 / 914.4);
        categoryLength.addConversionByName("Micrometer", "Foot", 1.0 / 304.8);
        categoryLength.addConversionByName("Micrometer", "Inches", 1.0 / 25.4);
        categoryLength.addConversionByName("Micrometer", "Nautical Mile", 1.0 / (1.852 * Math.pow(10, 6)));

        categoryLength.addConversionByName("Nanometer", "Mile", 1.0 / (1.60934 * Math.pow(10, 12)));
        categoryLength.addConversionByName("Nanometer", "Yard", 1.0 / (9.144 * Math.pow(10, 8)));
        categoryLength.addConversionByName("Nanometer", "Foot", 1.0 / (3.048 * Math.pow(10, 8)));
        categoryLength.addConversionByName("Nanometer", "Inches", 1.0 / (2.54 * Math.pow(10, 7)));
        categoryLength.addConversionByName("Nanometer", "Nautical Mile", 1.0 / (1.852 * Math.pow(10, 12)));
        
        categoryLength.addConversionByName("Mile", "Yard", 1760.0);
        categoryLength.addConversionByName("Mile", "Foot", 5280.0);
        categoryLength.addConversionByName("Mile", "Inches", 63360.0);
        categoryLength.addConversionByName("Mile", "Nautical Mile", 1.0 / 1.151);

        categoryLength.addConversionByName("Yard", "Foot", 3.0);
        categoryLength.addConversionByName("Yard", "Inches", 36.0);
        categoryLength.addConversionByName("Yard", "Nautical Mile", 1.0 / 2025.0);
        
        categoryLength.addConversionByName("Foot", "Inches", 12.0);
        categoryLength.addConversionByName("Foot", "Nautical Mile", 1.0 / 6076.0);
        
        categoryLength.addConversionByName("Inches", "Nautical Mile", 1.0 / 72913.0);

        return categoryLength;
    }


    /**
     * Returns the full category Datasize with all units and conversions in it
     */
    static getCategoryDatasize() {
        let categoryDatasize = new Category("Datasize");

        categoryDatasize.addUnit("Byte");
        categoryDatasize.addUnit("Kilobyte");
        categoryDatasize.addUnit("Megabyte");
        categoryDatasize.addConversionByName("Byte", "Kilobyte", 1000.0);

        return categoryDatasize;
    }

}