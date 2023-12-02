// const player = "john";
// const opponent = "cena";
// const game = "ThumbFight";
// let points = 0;
// let hasWon = false;
// points += 100;
// hasWon = true;

// if (hasWon) {
//   console.log(
//     `the winner is ${player} with points ${points} and won the ${game} game!`
//   );
// } else {
//   console.log(`the winner is ${opponent} with points ${points}`);
// }

// let food = ["momo", "chowmin", "pizza", "burger"];
// food.push("masala dosa");
// function foodToEat(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// foodToEat(food);

function generateSentence(desc, arr) {
  let baseSentence = `The ${arr.length} ${desc} are `;
  const lastIndex = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (lastIndex === i) {
      baseSentence += arr[i] + ".";
    } else {
      baseSentence += arr[i] + ", ";
    }
  }
  return baseSentence;
}

const sentence = generateSentence("foods", [
  "chola bhatora",
  "pulao",
  "biryani",
]);
console.log(sentence);
