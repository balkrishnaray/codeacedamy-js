const button = document.querySelector("#new-quote");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

const newQuote = [
  {
    quote: `“Be yourself; everyone else is already taken.”`,
    person: `Oscar Wilde`,
  },
  {
    quote: `“A room without books is like a body without a soul.”`,
    person: `Marcus Tullius Cicero`,
  },
  {
    quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    person: `Dr. Seuss`,
  },
  {
    quote: `“You only live once, but if you do it right, once is enough.”`,
    person: `Mae West`,
  },
  {
    quote: `“If you tell the truth, you don't have to remember anything.”`,
    person: `Mark Twain`,
  },
];

button.addEventListener("click", function () {
  let random = Math.floor(Math.random() * newQuote.length);
  quote.innerHTML = newQuote[random].quote;
  person.innerHTML = newQuote[random].person;
});
