

// Card Constructor
function Card(point, suit) {
    this.point = point;
    this.suit = suit;
}

Card.prototype.getImageUrl = function(card) {
    var pointURL = '';
    switch(card[0]) {
        case 1: 
            pointURL = 'ace';
            break;
        case 11:
            pointURL = 'jack';
            break;
        case 12:
            pointURL = 'queen';
            break;
        case 13:
            pointURL = 'king';
            break;
        default:
            pointURL = card[0];
    }
    var suitURL = '';
    switch(card[1]) {
        case 'hearts':
            suitURL = 'hearts';
            break;
        case 'diamonds':
            suitURL = 'diamonds';
            break;
        case 'clubs':
            suitURL = 'clubs';
            break;
        case 'spades':
            suitURL = 'spades';
    }
    return `cards/${pointURL} + '_of_' + ${suitURL}.jpg`;
};

// Hand Constructor
function Hand() {
    this.cardsInHand = [];
}

Hand.prototype.addCard = function(card) {
    this.cardsInHand.push(card);
    // console.log("current cards",this.cardInHand);
}

Hand.prototype.getPoints = function() {
    var self = this;

    var points = self.cardsInHand.map(function(e) {
        return e.point;
    });

    // points.reduce(function(a, b) {
    //     return a + b;
    // }, 0);

    // console.log(points);
    let count = 0;
    points.forEach(function(index){
        count = count + index;
    })

    // console.log(count);
    return count;
}

// Deck Constructor
function Deck() {
    this.deck = [];
}

Deck.prototype.draw = function() {
    let cardIndex = Math.floor(Math.random() * deck.length);
    var randCard = deck[cardIndex];
    randCard.splice(cardIndex, 1);
    return randCard;
}

Deck.prototype.shuffle = function() {
    for (var i = this.deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.deck[i];
        this.deck[i] = this.deck[j];
        this.deck[j] = temp;
    }
    return this.deck;
}

Deck.prototype.numCardsLeft = function() {
    return this.deck.length;
}


var myHand = new Hand();
myHand.addCard(new Card(13, "hearts"));
myHand.addCard(new Card(11, "Diamonds"));
myHand.addCard(new Card(9, "Diamonds"));
