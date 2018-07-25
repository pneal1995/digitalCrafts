// Globals
var deal = document.getElementById('deal'),
hit = document.getElementById('hit'),
stand = document.getElementById('stand'),
reset = document.getElementById('reset'),
psum = document.getElementById('psum'),
dsum = document.getElementById('dsum'),
result = document.getElementById('resultbox'),
winsCounter = document.getElementById('winscounter'),
playerCards = document.getElementById('playercards'),
dealerCards = document.getElementById('dealercards');

document.getElementById('psum').readOnly = true;
document.getElementById('dsum').readOnly = true;
document.getElementById('resultbox').readOnly = true;
document.getElementById('winscounter').readOnly = true;

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
      if (this === playerOne) {
        noOfCardsPlayer++
        playerCards.appendChild(imgElement)
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
};

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
    noOfWins += 0
    winsCounter.value = noOfWins
    disableHitStand()
  } else if (pscore === 21 && dscore !== 21) {
    result.value = 'y o u  w i n'
    noOfWins += 1
    winsCounter.value = noOfWins
    disableHitStand()
  }
    else if (pscore === 21 && dscore === 21) {
        result.value = 'You tie'
        noOfWins += 0
        winsCounter.value = noOfWins
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
  // psum.value = pscore
  // dsum.value = dscore
  while (dscore < 17) {
    pitboss.hitCard(pitboss.deck)
    dscore = pitboss.sumCards(pitboss.deck)
    dsum.value = dscore
  }
  if (dscore > pscore && dscore <= 21) {
    result.value = 'Dealer won with ' + dscore
    disableHitStand()
  } 
    else if (pscore > dscore || dscore > 21) {
    if (pscore === 21) {
      result.value = 'b l a c j a c k ! @'
      noOfWins += 1
      winsCounter.value = noOfWins
      disableHitStand()
    } else {
      result.value = 'You won with ' + pscore
      noOfWins += 1
      winsCounter.value = noOfWins
      disableHitStand()
    }
  } else {
    result.value = 'Both tied with ' + pscore
    disableHitStand()
  }
}

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
    noOfWins += 1
    winsCounter.value = noOfWins
    disableHitStand()
  }
  if (dscore === 21) {
    result.value = 'You won with BLACKJACK !'
    noOfWins += 1
    winsCounter.value = noOfWins
    disableHitStand()
  }
}

function resetGame() {
  result.value = ''
  dsum.value = ''
  psum.value = ''
  stand.disabled = true;
  hit.disabled = true;
  function removeImages() {
    var playerCardImages = playercards.childNodes
    var dealerCardImages = dealercards.childNodes
    for (var i = noOfCardsPlayer; i > 0; i--) {
      playerCardImages[i].parentNode.removeChild(playerCardImages[i])
    }
    for (var j = noOfCardsDealer; j > 0; j--) {
      dealerCardImages[j].parentNode.removeChild(dealerCardImages[j])
    }
  }
  playerOne.deck = []
  pitboss.deck = []
  noOfCardsDealer = 0
  noOfCardsPlayer = 0
  
}

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
