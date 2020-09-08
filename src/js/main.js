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
            input1: 1,
            input2: 1,
        },


        // methods
        methods: {

            convert(leftToRight) {
                console.log("converted");
                // find conversion factor
                let unit1 = this.getSelectedUnit1();
                let unit2 = this.getSelectedUnit2();
                try {
                    let factor = this.selectedCategory.findConversionFactor(unit1, unit2);
                    // only update values when not correctly calculated
                    if (this.input1 * factor !== this.input2) {
                        if (leftToRight) {
                            this.input2 = this.input1 * factor;
                        } else {
                            this.input1 = this.input2 / factor;
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


            prettyprint(obj) {
                console.log(JSON.stringify(obj, null, '\t'));
            },

        },


        // created
        created() {
            this.collection = ConversionCollection.getFullCollection();
            console.info("Collection loaded.");
            //console.log(`"collection": ` + JSON.stringify(this.collection, null, '\t'));
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