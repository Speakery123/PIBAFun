"use strict";

// TODO: utwórz zmienną przechowującą stan licznika
let counter = 0;
// TODO: napisz funkcję addPoint, która zwiększa licznik o 1 i aktualizuje wyświetlacz
function addPoint() {
    counter += 1;
    document.getElementById("counter-display").textContent = counter;
}

function resetCounter() {
    counter = 0
    document.getElementById("counter-display").textContent = counter;
}
// TODO: utwórz tablicę z elementami do losowania
let list = ["Say 'quack' 8 times in a row", "Burp", "Dance a stupid dance", "Do 'SUIIIIIII'"];
// TODO: napisz funkcję drawItem, która losuje element z tablicy i wyświetla go
function randomItem() {
    let index = Math.floor(Math.random() * list.length);
    document.getElementById("random-display").textContent = list[index];
}