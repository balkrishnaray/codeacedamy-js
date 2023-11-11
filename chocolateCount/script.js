let count = 0;
let chocolateQn = document.getElementById("chocolate-qn");
let buyqn = document.getElementById("previous-el");
function chocolateIncrease() {
  count++;
  chocolateQn.textContent = count;
}

function buy() {
  buyqn.textContent += count + " - ";
  chocolateQn.textContent = 0;
  count = 0;
}
