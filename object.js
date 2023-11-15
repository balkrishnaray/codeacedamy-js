// let person = {
//   name: "balkrishna",
//   age: 21,
//   country: "Nepal",
// };

// function logData() {
//   console.log(
//     person.name + " is " + person.age + " old and lives in " + person.country
//   );
// }
// logData();

let hand1 = ["rock", "paper", "scissor"];
let hand2 = ["rock", "paper", "scissor"];

function randomValue() {
  let i = Math.floor(Math.random() * 3);
  return hand1[i];
}
function randomValue2() {
  let j = Math.floor(Math.random() * 3);
  return hand2[j];
}
console.log(randomValue());
console.log(randomValue2());
