var slideIndex = 0;
var cardDeck = document.querySelector(".card-deck");
var testCard = document.getElementsByClassName("test-card");
var cardLength = 0;
var cards;

storeCards();

setInterval(() => { plus(1); }, 2000);

function plus(n) {
    showSlides(slideIndex += n);
}

function storeCards() {
    cards = Object.entries(testCard);
    // console.log(cards);
    cardLength = cards.length;
    // console.log(cards[0][1].outerHTML);
    showSlides(slideIndex);
    // console.log(cards);
}

function showSlides(n) {
    if (n < 0) {
        slideIndex = cardLength + n;
    }
    if (n >= cardLength) {
        slideIndex = 0;
    }
    cardDeck.innerHTML = "";
    cardDeck.innerHTML += cards[(slideIndex) % (cardLength)][1].outerHTML;
    cardDeck.innerHTML += cards[(slideIndex + 1) % (cardLength)][1].outerHTML;
    cardDeck.innerHTML += cards[(slideIndex + 2) % (cardLength)][1].outerHTML;
}