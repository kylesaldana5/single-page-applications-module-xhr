(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let carnivores = [];
let herbivores = [];

const loadCarnivores = function (callback) {
    const loader = new XMLHttpRequest();
    loader.open("GET", "carnivores.json");
    loader.send();
    
    loader.addEventListener("load", function() {
    // Set the value of the private array
    carnivores = JSON.parse(this.responseText);
    
    // Now exeute the callback function `callbackToInvoke` so that the caller knows that the process is complete. Make sure to pass the carnivore array as an argument.
    callback(carnivores);
    console.log('',carnivores );
    
    
});

};



const loadHerbivores = function (callback) {
     const loader = new XMLHttpRequest();
    loader.open("GET", "herbivores.json");
    loader.send();
    
    loader.addEventListener("load", function() {
    herbivores = JSON.parse(this.responseText);
    callback(herbivores);
    });
};

    
   

module.exports = { loadCarnivores, loadHerbivores };


},{}],2:[function(require,module,exports){
"use strict";
const animal = require("./animal");

let herbDiv = document.getElementById("herbDiv");
let carnDiv = document.getElementById("carnDiv");


let showCarnivore = function (animals) {
    carnDiv.innerHTML += "Carnivores: ";
    animals.carnivores.forEach(element => {
        carnDiv.innerHTML += (element.species) + ' ';
    });
};
let showHerbivore = function (animals) {
    herbDiv.innerHTML += "Herbivores: ";
    animals.herbivores.forEach(element => {
        herbDiv.innerHTML += (element.species) + ' ';
    });
};


animal.loadCarnivores(showCarnivore);
animal.loadHerbivores(showHerbivore);


},{"./animal":1}]},{},[2]);
