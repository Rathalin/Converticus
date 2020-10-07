"use strict";

/*

@author:        Daniel Flockert
@last_edited:   07.10.2020

Main file for Converticus app
Displays and handles the ConversionCollection

*/


self.addEventListener("install", function (event) {
    let files = [
        "/",
        "/index.html",
        "/main.js",

        "/lib/materialize/css/materialize.css",
        "/lib/materialize/css/materialize.min.css",

        "/lib/materialize/js/materialize.js",
        "/lib/materialize/js/materialize.min.js",

        "/lib/vuejs/vue.min.js",

        "/src/css/main.css",

        "/src/js/conversion/Category.js",
        "/src/js/conversion/Conversion.js",
        "/src/js/conversion/ConversionCollection.js",
        "/src/js/conversion/Unit.js",

        "https://fonts.googleapis.com/icon?family=Material+Icons",
        "https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2",
    ];
    event.waitUntil(
        caches.open("v1").then(function (cache) {
            return cache.addAll(files);
        })
    );
});


self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request, { ignoreMethod: false, ignoreSearch: false, ignoreVary: true }).catch(function () {
            return fetch(event.request);
        })
    );
});