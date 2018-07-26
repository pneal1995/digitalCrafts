// SPAGETTI CODE
var deal = document.getElementById('deal'),
hit = document.getElementById('hit'),
stand = document.getElementById('stand'),
reset = document.getElementById('reset'),
psum = document.getElementById('psum'),
dsum = document.getElementById('dsum'),
result = document.getElementById('resultbox'),
playerCards = document.getElementById('playercards'),
dealerCards = document.getElementById('dealercards');

document.getElementById('psum').readOnly = true;
document.getElementById('dsum').readOnly = true;
document.getElementById('resultbox').readOnly = true;

// Actions
deal.addEventListener('click', playGame)
hit.addEventListener('click', hitMe)
stand.addEventListener('click', userStands)
reset.addEventListener('click', resetGame)



deal.disabled = false
stand.disabled = true
hit.disabled = true

var noOfCardsPlayer = 0,
noOfCardsDealer = 0,
noOfWins = 0

var PlayingDeck = new DeckObject();

// Deck object constructer
function DeckObject() {
  this.deck = []
  this.displayCards = function(cards) {
    for (var i = 0; i < cards.length; i++) {
      var imgElement = document.createElement('img')
      imgElement.src = 'cards/' + cards[i].cardNum + '_of_' + cards[i].cardSuit + '.jpg'
      imgElement.style.height = '120px'
      imgElement.style.width = '100px'
      imgElement.style.padding = '5px'
      if (this === playerOne) {
        noOfCardsPlayer++
        playercards.appendChild(imgElement)
      } else {
        noOfCardsDealer++
        dealerCards.appendChild(imgElement)
      }
    }
  }
  this.sumCards = function(cards) {
    var sum = 0,
      aces = 0
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].getCardValue() === 11) { 
        aces += 1
        sum = sum + cards[i].getCardValue()
      } else {
        sum = sum + cards[i].getCardValue()
      }
    }
    while (aces > 0 && sum > 21) {
      aces -= 1
      sum -= 10
    }
    return sum
  }
  this.hitCard = function(cards) {
    var soloCard = [] 
    var extraCard = cards.push(PlayingDeck.deck.pop())
    soloCard.push(cards[extraCard - 1]) 
    this.displayCards(soloCard)
    if (this === playerOne) {
      checkIfBust()
    }
  }
}

// Main deck used to play the game
(function fillPlayingDeck() {
  var ranks = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  for (var i = 0; i < ranks.length; i++) {
    for (var j = 0; j < suits.length; j++) {
      PlayingDeck.deck.push(new CardObject(ranks[i], suits[j])) // generating 52 new card objects
    }
  }

  var len = PlayingDeck.deck.length,
    randomNum, tempValue
  while (len) { // Fischer-Yates shuffling Algorithm
    randomNum = Math.floor(Math.random() * len--)
    tempValue = PlayingDeck.deck[len]
    PlayingDeck.deck[len] = PlayingDeck.deck[randomNum]
    PlayingDeck.deck[randomNum] = tempValue
  }
}())



var playerOne = new DeckObject()


function player() {
  playerOne.deck.push(PlayingDeck.deck.pop(), PlayingDeck.deck.pop())
  playerOne.displayCards(playerOne.deck)
  psum.value = playerOne.sumCards(playerOne.deck)
}

var pitboss = new DeckObject()

function dealer() {
  pitboss.deck.push(PlayingDeck.deck.pop(), PlayingDeck.deck.pop())
  pitboss.displayCards(pitboss.deck)
  dsum.value = pitboss.sumCards(pitboss.deck)
}


function checkIfBust() {
  var pscore = playerOne.sumCards(playerOne.deck)
  var dscore = pitboss.sumCards(pitboss.deck)
  psum.value = pscore
  dsum.value = dscore
  if (pscore > 21) {
    result.value = 'B U S T'
    alertMe()
    disableHitStand()
  } else if (pscore === 21 && dscore !== 21) {
    result.value = 'You win with' + pscore
    alertMe()
    disableHitStand()
  }
    else if (pscore === 21 && dscore === 21) {
        result.value = 'You both have blackjacks and tie!'
        alertMe()
        disableHitStand()
  }
}

// function that runs on hit
function hitMe() {
  playerOne.hitCard(playerOne.deck)
}

// function that runs if user stands
function userStands() {
  var pscore = playerOne.sumCards(playerOne.deck)
  var dscore = pitboss.sumCards(pitboss.deck)
  while (dscore < 17) {
    pitboss.hitCard(pitboss.deck)
    dscore = pitboss.sumCards(pitboss.deck)
    dsum.value = dscore
  }
  if (dscore > pscore && dscore <= 21) {
    result.value = 'Dealer won with ' + dscore
    alertMe()
    disableHitStand()
  } 
    else if (pscore > dscore || dscore > 21) {
    if (pscore === 21) {
      result.value = 'You got a BLACKJACK !!'
      alertMe()
      disableHitStand()
    } else {
      result.value = 'You won with ' + pscore
      alertMe()
      disableHitStand()
    }
  } else {
    result.value = 'Both tied with ' + pscore
    alertMe()
    disableHitStand()
  }
}

function alertMe() {
  bootbox.dialog({ 
    size: "large", 
    onEscape: true, 
    backdrop: true,
    closeButton: false,
    // animate:true,
    message: result.value, 
    callback: function(result) {} 
  })
};

// function that disables hit and stand button after result is shown.
function disableHitStand() {
  stand.disabled = true
  hit.disabled = true
}

// main game function on 'deal' button click
function playGame() {
  player()
  dealer()
  deal.disabled = true
  stand.disabled = false
  hit.disabled = false
  var pscore = playerOne.sumCards(playerOne.deck)
  var dscore = pitboss.sumCards(pitboss.deck)
  psum.value = pscore
  dsum.value = dscore
  if (pscore === 21) {
    result.value = 'You won with BLACKJACK !'
    alertMe()
    disableHitStand()
  }
  if (dscore === 21) {
    result.value = 'The dealer wins with blackjack'
    alertMe()
    disableHitStand()
  }
}

function resetGame() {
  result.value = ''
  dsum.value = ''
  psum.value = ''
  deal.disabled = false;
  hit.disabled = true;
  stand.disabled = true;
  playerOne.deck = []
  pitboss.deck = []
  noOfCardsDealer = 0
  noOfCardsPlayer = 0
  playerCards = document.getElementById('playercards');
  dealerCards = document.getElementById('dealercards');
  while (playerCards.firstChild) {
    playerCards.removeChild(playerCards.firstChild);
  }
  while (dealerCards.firstChild) {
    dealerCards.removeChild(dealerCards.firstChild);
  }
};

function CardObject(cardNum, cardSuit) {
  this.cardNum = cardNum
  this.cardSuit = cardSuit
}
CardObject.prototype.getCardValue = function() {
  if (this.cardNum === 'jack' || this.cardNum === 'queen' || this.cardNum === 'king') {
      return 10
  } else if (this.cardNum === 'ace') {
      return 11
  } else {
      return this.cardNum
  }
}
