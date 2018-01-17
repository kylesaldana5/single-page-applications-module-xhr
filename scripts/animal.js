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

