"use strict";

/*

@author:        Daniel Flockert
@last_edited:   13.09.2020

Conversion Collection
Holds all categories with units and their conversions in it
Also holds the default collection

*/

import { Category } from "./Category.js";

export class ConversionCollection {
    constructor() {
        this.nextCategoryId = 0;
        this.categories = [];
    }


    toString() {
        let s = `{ "nextCategoryId": ${this.nextCategoryId}, "categories": [`;
        for (let i = 0; i < this.categories.length; i++) {
            s += `${this.categories[i]}`;
            if (i + 1 < this.categories.length) {
                s += `, `;
            }
        }
        s += `] }`;
        return s;
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

        collection.addCategory(ConversionCollection.getCategoryEnergy());
        collection.addCategory(ConversionCollection.getCategoryLength());
        collection.addCategory(ConversionCollection.getCategoryMass());
        collection.addCategory(ConversionCollection.getCategoryPressure());
        collection.addCategory(ConversionCollection.getCategorySpeed());
        collection.addCategory(ConversionCollection.getCategoryTemperature());
        collection.addCategory(ConversionCollection.getCategoryAtzls());

        return collection;
    }


    /**
     * Returns the full category Energy with all units and conversions in it
     */
    static getCategoryEnergy() {
        let categoryEnergy = new Category("Energy");

        categoryEnergy.addUnit("Joule");
        categoryEnergy.addUnit("Kilojoule");
        categoryEnergy.addUnit("Gram Calorie");
        categoryEnergy.addUnit("Kilocalorie");
        categoryEnergy.addUnit("Watt hour");
        categoryEnergy.addUnit("Kilowatt Hour");
        categoryEnergy.addUnit("Electronvolt");
        categoryEnergy.addUnit("British Thermal Unit");
        categoryEnergy.addUnit("US Therm");
        categoryEnergy.addUnit("Foot Pound");

        categoryEnergy.addConversionByName("Joule", "Kilojoule", val => val / Math.pow(10, 3), val => val * Math.pow(10, 3));
        categoryEnergy.addConversionByName("Joule", "Gram Calorie", val => val / 4.184, val => val * 4.184);
        categoryEnergy.addConversionByName("Joule", "Kilocalorie", val => val / 4184.0, val => val * 4184.0);
        categoryEnergy.addConversionByName("Joule", "Watt hour", val => val / (3.6 * Math.pow(10, 3)), val => val * (3.6 * Math.pow(10, 3)));
        categoryEnergy.addConversionByName("Joule", "Kilowatt Hour", val => val / (3.6 * Math.pow(10, 6)), val => val * (3.6 * Math.pow(10, 6)));
        categoryEnergy.addConversionByName("Joule", "Electronvolt", val => val * (6.242 * Math.pow(10, 18)), val => val / (6.242 * Math.pow(10, 18)));
        categoryEnergy.addConversionByName("Joule", "British Thermal Unit", val => val / (1.055 * Math.pow(10, 3)), val => val * (1.055 * Math.pow(10, 3)));
        categoryEnergy.addConversionByName("Joule", "US Therm", val => val / (1.055 * Math.pow(10, 8)), val => val * (1.055 * Math.pow(10, 8)));
        categoryEnergy.addConversionByName("Joule", "Foot Pound", val => val / 1.356, val => val * 1.356);

        categoryEnergy.addConversionByName("Kilojoule", "Gram Calorie", val => val * 239.0, val => val / 239.0);
        categoryEnergy.addConversionByName("Kilojoule", "Kilocalorie", val => val / 4.184, val => val * 4.184);
        categoryEnergy.addConversionByName("Kilojoule", "Watt hour", val => val / 3.6, val => val * 3.6);
        categoryEnergy.addConversionByName("Kilojoule", "Kilowatt Hour", val => val / (3.6 * Math.pow(10, 3)), val => val * (3.6 * Math.pow(10, 3)));
        categoryEnergy.addConversionByName("Kilojoule", "Electronvolt", val => val * (9.223 * Math.pow(10, 18)), val => val / (9.223 * Math.pow(10, 18)));
        categoryEnergy.addConversionByName("Kilojoule", "British Thermal Unit", val => val / 1.055, val => val * 1.055);
        categoryEnergy.addConversionByName("Kilojoule", "US Therm", val => val / (1.055 * Math.pow(10, 5)), val => val * (1.055 * Math.pow(10, 5)));
        categoryEnergy.addConversionByName("Kilojoule", "Foot Pound", val => val * 738.0, val => val / 738.0);
        
        categoryEnergy.addConversionByName("Gram Calorie", "Kilocalorie", val => val / 1000.0, val => val * 1000.0);
        categoryEnergy.addConversionByName("Gram Calorie", "Watt hour", val => val / 860.0, val => val * 860.0);
        categoryEnergy.addConversionByName("Gram Calorie", "Kilowatt Hour", val => val / 860421.0, val => val * 860421.0);
        categoryEnergy.addConversionByName("Gram Calorie", "Electronvolt", val => val * (9.223 * Math.pow(10, 18)), val => val / (9.223 * Math.pow(10, 18)));
        categoryEnergy.addConversionByName("Gram Calorie", "British Thermal Unit", val => val / 252.0, val => val * 252.0);
        categoryEnergy.addConversionByName("Gram Calorie", "US Therm", val => val / (2.521 * Math.pow(10, 7)), val => val * (2.521 * Math.pow(10, 7)));
        categoryEnergy.addConversionByName("Gram Calorie", "Foot Pound", val => val * 3.086, val => val / 3.086);

        return categoryEnergy;
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

        categoryLength.addConversionByName("Kilometer", "Meter", val => val * Math.pow(10, 3), val => val / Math.pow(10, 3));
        categoryLength.addConversionByName("Kilometer", "Centimeter", val => val * Math.pow(10, 5), val => val / Math.pow(10, 5));
        categoryLength.addConversionByName("Kilometer", "Millimeter", val => val * Math.pow(10, 6), val => val / Math.pow(10, 6));
        categoryLength.addConversionByName("Kilometer", "Micrometer", val => val * Math.pow(10, 9), val => val / Math.pow(10, 9));
        categoryLength.addConversionByName("Kilometer", "Nanometer", val => val * Math.pow(10, 12), val => val / Math.pow(10, 12));
        categoryLength.addConversionByName("Kilometer", "Mile", val => val * 0.621371, val => val / 0.621371);
        categoryLength.addConversionByName("Kilometer", "Yard", val => val * 1093.1, val => val / 1093.1);
        categoryLength.addConversionByName("Kilometer", "Foot", val => val * 3280.84, val => val / 3280.84);
        categoryLength.addConversionByName("Kilometer", "Inches", val => val * 39370.1, val => val / 39370.1);
        categoryLength.addConversionByName("Kilometer", "Nautical Mile", val => val * 0.539957, val => val / 0.539957);

        categoryLength.addConversionByName("Meter", "Centimeter", val => val * Math.pow(10, 2), val => val / Math.pow(10, 2));
        categoryLength.addConversionByName("Meter", "Millimeter", val => val * Math.pow(10, 3), val => val / Math.pow(10, 3));
        categoryLength.addConversionByName("Meter", "Micrometer", val => val * Math.pow(10, 6), val => val / Math.pow(10, 6));
        categoryLength.addConversionByName("Meter", "Nanometer", val => val * Math.pow(10, 9), val => val / Math.pow(10, 9));
        categoryLength.addConversionByName("Meter", "Mile", val => val / 1609.0, val => val * 1609);
        categoryLength.addConversionByName("Meter", "Yard", val => val * 1.09361, val => val / 1.09361);
        categoryLength.addConversionByName("Meter", "Foot", val => val * 3.28084, val => val / 3.28084);
        categoryLength.addConversionByName("Meter", "Inches", val => val * 39.37, val => val / 39.37);
        categoryLength.addConversionByName("Meter", "Nautical Mile", val => val / 1852.0, val => val * 1852.0);

        categoryLength.addConversionByName("Centimeter", "Millimeter", val => val * Math.pow(10, 1), val => val / Math.pow(10, 1));
        categoryLength.addConversionByName("Centimeter", "Micrometer", val => val * Math.pow(10, 4), val => val / Math.pow(10, 4));
        categoryLength.addConversionByName("Centimeter", "Nanometer", val => val * Math.pow(10, 7), val => val / Math.pow(10, 7));
        categoryLength.addConversionByName("Centimeter", "Mile", val => val / 160934.0, val => val * 160934.0);
        categoryLength.addConversionByName("Centimeter", "Yard", val => val / 91.44, val => val * 91.44);
        categoryLength.addConversionByName("Centimeter", "Foot", val => val / 30.48, val => val / 30.48);
        categoryLength.addConversionByName("Centimeter", "Inches", val => val / 2.54, val => val * 2.54);
        categoryLength.addConversionByName("Centimeter", "Nautical Mile", val => val / 185200.0, val => val * 185200.0);

        categoryLength.addConversionByName("Millimeter", "Micrometer", val => val * Math.pow(10, 3), val => val / Math.pow(10, 3));
        categoryLength.addConversionByName("Millimeter", "Nanometer", val => val * Math.pow(10, 6), val => val / Math.pow(10, 6));
        categoryLength.addConversionByName("Millimeter", "Mile", val => val / (1.60934 * Math.pow(10, 6)), val => val * (1.60934 * Math.pow(10, 6)));
        categoryLength.addConversionByName("Millimeter", "Yard", val => val / 914.4, val => val * 914.4);
        categoryLength.addConversionByName("Millimeter", "Foot", val => val / 304.8, val => val * 304.8);
        categoryLength.addConversionByName("Millimeter", "Inches", val => val / 25.4, val => val * 25.4);
        categoryLength.addConversionByName("Millimeter", "Nautical Mile", val => val / (1.852 * Math.pow(10, 6)), val => val * (1.852 * Math.pow(10, 6)));

        categoryLength.addConversionByName("Micrometer", "Nanometer", val => val * Math.pow(10, 6), val => val / Math.pow(10, 6));
        categoryLength.addConversionByName("Micrometer", "Mile", val => val / (1.60934 * Math.pow(10, 6)), val => val * (1.60934 * Math.pow(10, 6)));
        categoryLength.addConversionByName("Micrometer", "Yard", val => val / 914.4, val => val * 914.4);
        categoryLength.addConversionByName("Micrometer", "Foot", val => val / 304.8, val => val * 304.8);
        categoryLength.addConversionByName("Micrometer", "Inches", val => val / 25.4, val => val * 25.4);
        categoryLength.addConversionByName("Micrometer", "Nautical Mile", val => val / (1.852 * Math.pow(10, 6)), val => val * (1.852 * Math.pow(10, 6)));

        categoryLength.addConversionByName("Nanometer", "Mile", val => val / (1.60934 * Math.pow(10, 12)), val => val * (1.60934 * Math.pow(10, 12)));
        categoryLength.addConversionByName("Nanometer", "Yard", val => val / (9.144 * Math.pow(10, 8)), val => val * (9.144 * Math.pow(10, 8)));
        categoryLength.addConversionByName("Nanometer", "Foot", val => val / (3.048 * Math.pow(10, 8)), val => val * (3.048 * Math.pow(10, 8)));
        categoryLength.addConversionByName("Nanometer", "Inches", val => val / (2.54 * Math.pow(10, 7)), val => val * (2.54 * Math.pow(10, 7)));
        categoryLength.addConversionByName("Nanometer", "Nautical Mile", val => val / (1.852 * Math.pow(10, 12)), val => val * (1.852 * Math.pow(10, 12)));

        categoryLength.addConversionByName("Mile", "Yard", val => val * 1760.0, val => val / 1760.0);
        categoryLength.addConversionByName("Mile", "Foot", val => val * 5280.0, val => val / 5280.0);
        categoryLength.addConversionByName("Mile", "Inches", val => val * 63360.0, val => val / 63360.0);
        categoryLength.addConversionByName("Mile", "Nautical Mile", val => val / 1.151, val => val * 1.151);

        categoryLength.addConversionByName("Yard", "Foot", val => val * 3.0, val => val / 3.0);
        categoryLength.addConversionByName("Yard", "Inches", val => val * 36.0, val => val / 36.0);
        categoryLength.addConversionByName("Yard", "Nautical Mile", val => val / 2025.0, val => val * 2025.0);

        categoryLength.addConversionByName("Foot", "Inches", val => val * 12.0, val => val / 12.0);
        categoryLength.addConversionByName("Foot", "Nautical Mile", val => val / 6076.0, val => val * 6076.0);

        categoryLength.addConversionByName("Inches", "Nautical Mile", val => val / 72913.0, val => val * 72913.0);

        return categoryLength;
    }


    /**
     * Returns the full category Mass with all units and conversions in it
     */
    static getCategoryMass() {
        let categoryMass = new Category("Mass");

        categoryMass.addUnit("Ton");
        categoryMass.addUnit("Kilogram");
        categoryMass.addUnit("Gram");
        categoryMass.addUnit("Milligram");
        categoryMass.addUnit("Microgram");
        categoryMass.addUnit("Imperial Ton");
        categoryMass.addUnit("US Ton");
        categoryMass.addUnit("Stone");
        categoryMass.addUnit("Pound");
        categoryMass.addUnit("Ounce");

        categoryMass.addConversionByName("Ton", "Kilogram", val => val * Math.pow(10, 3), val => val / Math.pow(10, 3));
        categoryMass.addConversionByName("Ton", "Gram", val => val * Math.pow(10, 6), val => val / Math.pow(10, 6));
        categoryMass.addConversionByName("Ton", "Milligram", val => val * Math.pow(10, 9), val => val / Math.pow(10, 9));
        categoryMass.addConversionByName("Ton", "Microgram", val => val * Math.pow(10, 12), val => val / Math.pow(10, 12));
        categoryMass.addConversionByName("Ton", "Imperial Ton", val => val / 1.016, val => val * 1.016);
        categoryMass.addConversionByName("Ton", "US Ton", val => val * 1.102, val => val / 1.102);
        categoryMass.addConversionByName("Ton", "Stone", val => val * 157.0, val => val / 157.0);
        categoryMass.addConversionByName("Ton", "Pound", val => val * 2205.0, val => val / 2205.0);
        categoryMass.addConversionByName("Ton", "Ounce", val => val * 35274.0, val => val / 35274.0);
        
        categoryMass.addConversionByName("Kilogram", "Gram", val => val * Math.pow(10, 3), val => val / Math.pow(10, 3));
        categoryMass.addConversionByName("Kilogram", "Milligram", val => val * Math.pow(10, 6), val => val / Math.pow(10, 6));
        categoryMass.addConversionByName("Kilogram", "Microgram", val => val * Math.pow(10, 9), val => val / Math.pow(10, 9));
        categoryMass.addConversionByName("Kilogram", "Imperial Ton", val => val / 1016.0, val => val * 1016.0);
        categoryMass.addConversionByName("Kilogram", "US Ton", val => val / 907.0, val => val * 907.0);
        categoryMass.addConversionByName("Kilogram", "Stone", val => val / 6.35, val => val * 6.35);
        categoryMass.addConversionByName("Kilogram", "Pound", val => val * 2.205, val => val / 2.205);
        categoryMass.addConversionByName("Kilogram", "Ounce", val => val * 35.274, val => val / 35.274);
        
        categoryMass.addConversionByName("Gram", "Milligram", val => val * Math.pow(10, 3), val => val / Math.pow(10, 3));
        categoryMass.addConversionByName("Gram", "Microgram", val => val * Math.pow(10, 6), val => val / Math.pow(10, 6));
        categoryMass.addConversionByName("Gram", "Imperial Ton", val => val / (1.016 * Math.pow(10, 6)), val => val * (1.016 * Math.pow(10, 6)));
        categoryMass.addConversionByName("Gram", "US Ton", val => val / 907185.0, val => val * 907185.0);
        categoryMass.addConversionByName("Gram", "Stone", val => val / 6350.0, val => val * 6350.0);
        categoryMass.addConversionByName("Gram", "Pound", val => val / 454.0, val => val * 454.0);
        categoryMass.addConversionByName("Gram", "Ounce", val => val / 28.35, val => val * 28.35);
        
        categoryMass.addConversionByName("Milligram", "Microgram", val => val * Math.pow(10, 3), val => val / Math.pow(10, 3));
        categoryMass.addConversionByName("Milligram", "Imperial Ton", val => val / (1.016 * Math.pow(10, 9)), val => val * (1.016 * Math.pow(10, 9)));
        categoryMass.addConversionByName("Milligram", "US Ton", val => val / (9.07185 * Math.pow(10, 8)), val => val * (9.07185 * Math.pow(10, 8)));
        categoryMass.addConversionByName("Milligram", "Stone", val => val / (6.350 * Math.pow(10, 6)), val => val * (6.350 * Math.pow(10, 6)));
        categoryMass.addConversionByName("Milligram", "Pound", val => val / 453592.0, val => val * 453592.0);
        categoryMass.addConversionByName("Milligram", "Ounce", val => val / 28350.0, val => val * 28350.0);
        
        categoryMass.addConversionByName("Microgram", "Imperial Ton", val => val / (1.016 * Math.pow(10, 12)), val => val * (1.016 * Math.pow(10, 12)));
        categoryMass.addConversionByName("Microgram", "US Ton", val => val / (9.07185 * Math.pow(10, 11)), val => val * (9.07185 * Math.pow(10, 11)));
        categoryMass.addConversionByName("Microgram", "Stone", val => val / (6.350 * Math.pow(10, 9)), val => val * (6.350 * Math.pow(10, 9)));
        categoryMass.addConversionByName("Microgram", "Pound", val => val / (4.53592 * Math.pow(10, 8)), val => val * (4.53592 * Math.pow(10, 8)));
        categoryMass.addConversionByName("Microgram", "Ounce", val => val / (2.835 * Math.pow(10, 7)), val => val * (2.835 * Math.pow(10, 7)));
        
        categoryMass.addConversionByName("Imperial Ton", "US Ton", val => val * 1.12, val => val / 1.12);
        categoryMass.addConversionByName("Imperial Ton", "Stone", val => val * 160.0, val => val / 160.0);
        categoryMass.addConversionByName("Imperial Ton", "Pound", val => val * 2240.0, val => val / 2240.0);
        categoryMass.addConversionByName("Imperial Ton", "Ounce", val => val * 35840.0, val => val / 35840.0);
        
        categoryMass.addConversionByName("US Ton", "Stone", val => val * 143.0, val => val / 143.0);
        categoryMass.addConversionByName("US Ton", "Pound", val => val * 2000.0, val => val / 2000.0);
        categoryMass.addConversionByName("US Ton", "Ounce", val => val * 32000.0, val => val / 32000.0);
        
        categoryMass.addConversionByName("Stone", "Pound", val => val * 14.0, val => val / 14.0);
        categoryMass.addConversionByName("Stone", "Ounce", val => val * 224.0, val => val / 224.0);

        categoryMass.addConversionByName("Pound", "Ounce", val => val * 16.0, val => val / 16.0);

        return categoryMass;
    }


    /**
     * Returns the full category Pressure with all units and conversions in it
     */
    static getCategoryPressure() {
        let categoryPressure = new Category("Pressure");

        categoryPressure.addUnit("Bar");
        categoryPressure.addUnit("Pascal");
        categoryPressure.addUnit("Pound Fource per Square Inch");
        categoryPressure.addUnit("Standard Atmosphere");
        categoryPressure.addUnit("Torr");

        categoryPressure.addConversionByName("Bar", "Pascal", val => val * Math.pow(10, 5), val => val / Math.pow(10, 5));
        categoryPressure.addConversionByName("Bar", "Pound Fource per Square Inch", val => val * 14.504, val => val / 14.504);
        categoryPressure.addConversionByName("Bar", "Standard Atmosphere", val => val / 1.013, val => val * 1.013);
        categoryPressure.addConversionByName("Bar", "Torr", val => val * 750.0, val => val / 750.0);

        categoryPressure.addConversionByName("Pascal", "Pound Fource per Square Inch", val => val / 6895.0, val => val * 6895.0);
        categoryPressure.addConversionByName("Pascal", "Standard Atmosphere", val => val / 101325.0, val => val * 101325.0);
        categoryPressure.addConversionByName("Pascal", "Torr", val => val / 133.0, val => val * 133.0);

        categoryPressure.addConversionByName("Pound Fource per Square Inch", "Standard Atmosphere", val => val / 14.696, val => val * 14.696);
        categoryPressure.addConversionByName("Pound Fource per Square Inch", "Torr", val => val * 51.715, val => val / 51.715);
        
        categoryPressure.addConversionByName("Standard Atmosphere", "Torr", val => val * 760.0, val => val / 760.0);

        return categoryPressure;
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

        categorySpeed.addConversionByName("Miles per Hour", "Feet per Second", val => val * 1.467, val => val / 1.467);
        categorySpeed.addConversionByName("Miles per Hour", "Meters per Second", val => val / 2.237, val => val * 2.237);
        categorySpeed.addConversionByName("Miles per Hour", "Kilometers per Hour", val => val * 1.609, val => val / 1.609);
        categorySpeed.addConversionByName("Miles per Hour", "Knots", val => val / 1.151, val => val * 1.151);

        categorySpeed.addConversionByName("Feet per Second", "Meters per Second", val => val / 3.281, val => val * 3.281);
        categorySpeed.addConversionByName("Feet per Second", "Kilometers per Hour", val => val * 1.097, val => val / 1.097);
        categorySpeed.addConversionByName("Feet per Second", "Knots", val => val / 1.688, val => val * 1.688);

        categorySpeed.addConversionByName("Meters per Second", "Kilometers per Hour", val => val * 3.6, val => val / 3.6);
        categorySpeed.addConversionByName("Meters per Second", "Knots", val => val * 1.944, val => val / 1.944);

        categorySpeed.addConversionByName("Kilometers per Hour", "Knots", val => val / 1.852, val => val * 1.852);

        return categorySpeed;
    }


    /**
     * Returns the full category Temperature with all units and conversions in it
     */
    static getCategoryTemperature() {
        let categoryTemperature = new Category("Temperature");

        categoryTemperature.addUnit("Celsius");
        categoryTemperature.addUnit("Fahrenheit");
        categoryTemperature.addUnit("Kelvin");

        categoryTemperature.addConversionByName("Celsius", "Fahrenheit", val => (val * (9.0 / 5.0)) + 32.0, val => (val - 32.0) * (5.0 / 9.0));
        categoryTemperature.addConversionByName("Celsius", "Kelvin", val => val + 273.15, val => val - 273.15);

        categoryTemperature.addConversionByName("Fahrenheit", "Kelvin", val => (val - 32.0) * (5.0 / 9.0) + 273.15, val => (val - 273.15) * (9.0 / 5.0) + 32.0);

        return categoryTemperature;
    }


    /**
     * hmmmmm
     */
    static getCategoryAtzls() {
        let categoryChongs = new Category("Atzls");

        categoryChongs.addUnit("Tschowatz");
        categoryChongs.addUnit("Chongatz");
        categoryChongs.addUnit("Mongatz");
        categoryChongs.addUnit("Flombatz");

        categoryChongs.addConversionByName("Chongatz", "Mongatz", val => val * 3.5, val => val / 3.5);
        categoryChongs.addConversionByName("Chongatz", "Flombatz", val => val * 16.0, val => val / 16.0);
        categoryChongs.addConversionByName("Chongatz", "Tschowatz", val => val / 5.0, val => val * 5.0);       

        categoryChongs.addConversionByName("Mongatz", "Flombatz", val => val * (16.0 / 3.5), val => val / (16.0 / 3.5));
        categoryChongs.addConversionByName("Mongatz", "Tschowatz", val => val * (0.2 / 3.5), val => val / (0.2 / 3.5));         
        
        categoryChongs.addConversionByName("Flombatz", "Tschowatz", val => val * ((0.2 / 3.5) / 4.5) , val => val / ((0.2 / 3.5) / 4.5));      

        return categoryChongs;
    }


}