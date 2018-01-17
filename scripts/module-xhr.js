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

