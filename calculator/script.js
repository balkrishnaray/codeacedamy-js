let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sum = document.getElementById("result-el");
function Add() {
  let result = num1 + num2;
  sum.textContent = "Result: " + result;
}

function Subtract() {
  let result = num1 - num2;
  sum.textContent = "Result: " + result;
}

function Multiply() {
  let result = num1 * num2;
  sum.textContent = "Result: " + result;
}

function Divide() {
  let result = num1 / num2;
  sum.textContent = "Result: " + result;
}
