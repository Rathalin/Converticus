"use strict";

/*

@author:    Daniel Flockert
@date:      08.09.2020

Main file for Converticus app
Displays and handles the ConversionCollection

*/


import { ConversionCollection } from "./conversion/ConversionCollection.js";

document.addEventListener('DOMContentLoaded', function () {

    new Vue({
        // name
        el: "#app",


        // data
        data: {
            collection: new ConversionCollection(),
            selectedCategory: {},
            precision: 3.0,
            input1: (1.0).toFixed(this.precision),
            input2: (1.0).toFixed(this.precision),
        },


        // methods
        methods: {

            convert(leftToRight) {
                // find conversion formula
                let unit1 = this.getSelectedUnit1();
                let unit2 = this.getSelectedUnit2();
                try {
                    let formula = this.selectedCategory.findConversionFormula(unit1, unit2);
                    console.log(formula);
                    console.log(formula(this.input1));
                    // only update values when not yet calculated
                    //if (this.input1 * formula !== this.input2) {
                    if (formula(this.input1) !== this.input2) {
                        if (leftToRight) {
                            // parse input1 to float
                            let inp1Float = parseFloat(this.input1);
                            if (!isNaN(inp1Float)) {
                                this.input1 = inp1Float.toFixed(this.precision);
                            }
                            // calculate input2
                            this.input2 = formula(this.input1).toFixed(this.precision);
                        } else {
                            // parse input2 to float
                            let inp2Float = parseFloat(this.input2);
                            if (!isNaN(inp2Float)) {
                                this.input2 = inp2Float.toFixed(this.precision);
                            }
                            // calculate input1
                            this.input1 = formula(this.input2).toFixed(this.precision);
                        }
                    }
                } catch (e) {
                    M.toast({
                        html: e,
                        classes: `red`,
                        displayLength: 4000,
                    });
                }

            },


            inputChanged(leftToRight) {
                this.convert(leftToRight);
            },


            categoryChanged() {
                // set different units
                document.getElementById("select-unit-1").selectedIndex = 0;
                document.getElementById("select-unit-2").selectedIndex = 1;
                this.requestMaterializeUpdate();
                this.convert(true);
            },


            getSelectedUnit1() {
                let selectedIndex = document.getElementById("select-unit-1").selectedIndex;
                return this.selectedCategory.units[selectedIndex];
            },


            getSelectedUnit2() {
                let selectedIndex = document.getElementById("select-unit-2").selectedIndex;
                return this.selectedCategory.units[selectedIndex];
            },


            requestMaterializeUpdate() {
                // manually fix materializecss select
                this.$nextTick(async () => {
                    await M.updateTextFields();
                    await M.FormSelect.init(document.querySelectorAll("select"));
                });
            },


            toPrettyString(obj) {
                return JSON.stringify(obj, null, '\t');
            },

        },


        // created
        created() {
            this.collection = ConversionCollection.getFullCollection();
            console.info("Collection loaded.");
            console.info(`"collection": ${this.toPrettyString(this.collection)}`);
        },


        // mounted
        mounted() {
            M.AutoInit();
            // set category and unit indizes
            this.selectedCategory = this.collection.categories[0];
            document.getElementById("select-unit-1").selectedIndex = 0;
            document.getElementById("select-unit-2").selectedIndex = 1;
            this.requestMaterializeUpdate();
            this.$nextTick(() => {
                document.getElementById("select-unit-2").selectedIndex = 1;
                this.convert(true);
            });
        },


        // computed
        computed: {

            selectedCategory() {
                // check if selected item is empty
                if (isNaN(this.selectedCategory)) {
                    return {};
                }

                this.requestMaterializeUpdate();
                // search category by id
                return this.collection.categories.find(cat => cat.id === parseInt(this.selectedCategory));
            },

        },

    });

});