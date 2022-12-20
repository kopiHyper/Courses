//Player
const player = {
  name: "Oktawian",
  chip: "200",
};

let cards = [];
let sum = 0;

let hasBlackJack = false;
let isAlive = true;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

//Rendering info about player
playerEl.textContent = player.name + ": $" + player.chip;
//

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Whoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  sumEl.textContent = "Sum: " + sum;
  messageEl.innerText = message;

  //Formating the array
  let showCards = cards.join(" ");
  //

  cardsEl.textContent = "Cards: " + showCards;
}

function newCard() {
  if (isAlive === true && !hasBlackJack) {
    let card = cardPicker();
    cards.push(card);
    sum += card;
    renderGame();
  } else if (cards.length < 2) {
  }
}

function startGame() {
  isAlive = true;
  let firstCard = cardPicker();
  let secondCard = cardPicker();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function cardPicker() {
  let cardDeck = Math.floor(Math.random() * 13) + 1; // generating a random number form 1 to 13
  if (cardDeck > 10) {
    return 10;
  } else if (cardDeck === 1) {
    return 11;
  } else {
    return cardDeck;
  }
}
