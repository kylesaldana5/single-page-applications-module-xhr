"use strict";

let carnivors = [];

let loadCarnivores = function (callbackToInvoke) {
    const loader = new XMLHttpRequest();
    loader.addEventListener("load", () => {
    // Set the value of the private array
    let carnivores = JSON.parse(this.responseText);
    // Now exeute the callback function (`callbackToInvoke`) so that the caller knows that the process is complete. Make sure to pass the carnivore array as an argument.
    callbackToInvoke(carnivores);
    });
    xhr.open("GET", "carnivores.json");
    xhr.send();
};

let herbivores = [];

let loadHerbivores = function (callbackToInvoke) {
    const loader = new XMLHttpRequest();
    loader.addEventListener("load", () =>{
    let herbivores = JSON.parse(this.responseText);
    callbackToInvoke(herbivores);
    });
    xhr.open("GET", "herbivores.json");
    xhr.send();
};

    
   

module.exports = { loadCarnivores, loadHerbivores };