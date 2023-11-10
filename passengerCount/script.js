// document.getElementById("count").innerText = 5;
// let myAge = 21;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);
let count = 0;
function increment() {
  count = count + 1;
  let countel = document.getElementById("count-el");
  countel.innerText = count;

  console.log(count);
}
