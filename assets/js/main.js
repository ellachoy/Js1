console.log("hallo");

console.log(5+6);

// let x = 5;
// let y = 6;
// let z = x + y;
// console.log(z)

// DOM (Document Object Model)
document.getElementById("demo").innerHTML="Hello";

// Funktionen
// Funktionen sind einer der grundlegenden Bausteine in JavaScript. Eine
// Funktion ist eine JS-Prozedur - eine Reihe von Anweisungen, die eine Aufgabe
// ausführen oder einen Wert berechnen.

function flaeche(h, b){
    return h * b;
}
console.log(flaeche(10, 4));

// Return (Rückgabewert)
let x =myFunction(4, 3);
function myFunction(a, b){
    return a *b;
}
console.log(x);

// CSS verändern mit “classList”
function myFunction() {
    document.getElementById("myHeadline").classList.add("newStyle");
}
// CodeFlow Projekt lev1_2: Change background-color with input

function colorBackgroundColor(){
    let CB=document.getElementById("colorbox").value;
    console.log(CB);
    document.body.style.background=CB
}
// w3s
function changeText(){
   document.getElementById("ergebniss").innerHTML="Hello Javascript";
}
// übung
document.getElementById("h").innerHTML="testtest";
// newtext js in head
function yourFunction(){
    document.getElementById("newText").innerHTML="paragraph changed";
}