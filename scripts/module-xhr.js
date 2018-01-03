"use strict";
const animal = require("./animal");

let carnDiv = document.getElementById("carnivores");
let herbDiv = document.getElementById("herbivores");

let showCarnivores = function(animals) {
    // code that takes the carnovores array and displays it to the DOM
    carnDiv.innerHTML += "Carnivores";
    animals.carnivores.foreach( element =>{
        carnDiv.innerHTML += (element.species) + '';
    }); 
};

let showHerbivores = function(animals) { 
    herbDiv.innerHTML += "Herbivores";
    animals.herbivores.foreach( element =>{
        herbDiv.innerHTML += (element.species) + '';
    });
};

animal.loadCarnivores(showCarnivores);
animal.loadHerbivores(showHerbivores);