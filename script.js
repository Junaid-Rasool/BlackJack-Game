let cards = [];
let sum = 0;
let message = "";
let isAlive = false;
let hasBlackjack = false;

let cardElement = document.getElementById('card-element');
let sumElement = document.getElementById('sum-element');
let newCardButton = document.getElementById('card-btn');
let msgElement = document.getElementById('message-element');

function getrandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if(randomCard > 10) {
        return 10;
    } else if(randomCard === 1) {
        return 11;
    } else {
        return randomCard;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getrandomCard();
    let secondCard = getrandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardElement.textContent = "Cards: ";
    for(let i = 0; i<cards.length; i++) {
        cardElement.textContent += cards[i] + " ";
    }
    sumElement.textContent = "Sum: " + sum;
    if(sum < 21) {
        message = "Do you want to draw a new card?";
    } else if(sum === 21) {
        message = "You WON!!!";
        hasBlackjack = true;
    } else {
        message = "You are out of the game!";
        isAlive = false;
    }
    msgElement.textContent = message;
}

newCardButton.addEventListener("click", function() {
    if(isAlive === true && hasBlackjack === false) {
    let newCard = getrandomCard();
    cards.push(newCard);
    sum += newCard;
    renderGame();
}
})
