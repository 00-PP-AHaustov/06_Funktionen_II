"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung : 
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : check
*/
let a, b, c;

input();
output(calculator(a, b, c));

function input() {
  do {
    a = Number(prompt("Erste Zahl:"));
  } while (isNaN(a));
  do {
    b = Number(prompt("Zweite Zahl:"));
  } while (isNaN(b));
  do {
    c = prompt("Bitte wählen: add, sub, mul, div");
  } while (c != "add" && c != "sub" && c != "mul" && c != "div");
}
function addition(num1, num2) {
  return num1 + num2;
}
function substract(num1, num2) {
  num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function calculator(num1, num2, operation) {
  switch (operation) {
    case "add":
      return addition(num1, num2);
    case "sub":
      return substract(num1, num2);
    case "mul":
      return multiply(num1, num2);
    case "div":
      if (num2 == 0) {
        return "Nicht durch 0 teilbar.";
      } else return divide(num1, num2);
  }
}
// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
  console.log(outputData);
}
