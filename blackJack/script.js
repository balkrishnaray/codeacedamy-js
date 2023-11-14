let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");
let cards = [];
let firstCard, secondCard;

let player = {
  name: "John",
  chips: 150,
};
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  isAlive = true;
  firstCard = getRandomValue();
  secondCard = getRandomValue();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];

  renderGame();
}
function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  if (sum < 21) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "Congrats you got a blackjack!";
    hasBlackJack = true;
  } else {
    message = "you have lost!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let newcard = getRandomValue();
    cards.push(newcard);
    sum += newcard;
    renderGame();
  }
}

function getRandomValue() {
  let value = Math.floor(Math.random() * 13) + 1;
  if (value > 10) {
    return 10;
  } else if (value === 1) {
    return 11;
  } else {
    return value;
  }
}
