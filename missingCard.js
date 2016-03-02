
var deck = [
  {
    number: 1,
    suit: 'spades'
  },
  {
    number: 1,
    suit: 'diamonds'
  },
  {
    number: 1,
    suit: 'hearts'
  },
  {
    number: 1,
    suit: 'clubs'
  },
  {
    number: 2,
    suit: 'spades'
  },
  {
    number: 2,
    suit: 'diamonds'
  },
  {
    number: 2,
    suit: 'hearts'
  },
  {
    number: 2,
    suit: 'clubs'
  },
  {
    number: 3,
    suit: 'spades'
  },
  {
    number: 3,
    suit: 'diamonds'
  },
  {
    number: 3,
    suit: 'hearts'
  },
  {
    number: 3,
    suit: 'clubs'
  },
  {
    number: 4,
    suit: 'spades'
  },
  {
    number: 4,
    suit: 'diamonds'
  },
  {
    number: 4,
    suit: 'hearts'
  },
  {
    number: 4,
    suit: 'clubs'
  },
  {
    number: 5,
    suit: 'spades'
  },
  {
    number: 5,
    suit: 'diamonds'
  },
  {
    number: 5,
    suit: 'hearts'
  },
  {
    number: 5,
    suit: 'clubs'
  },
  {
    number: 6,
    suit: 'spades'
  },
  {
    number: 6,
    suit: 'diamonds'
  },
  {
    number: 6,
    suit: 'hearts'
  },
  {
    number: 6,
    suit: 'clubs'
  },
  {
    number: 7,
    suit: 'spades'
  },
  {
    number: 7,
    suit: 'diamonds'
  },
  // {
  //   number: 7,
  //   suit: 'hearts'
  // },
  {
    number: 7,
    suit: 'clubs'
  },
  {
    number: 8,
    suit: 'spades'
  },
  {
    number: 8,
    suit: 'diamonds'
  },
  {
    number: 8,
    suit: 'hearts'
  },
  {
    number: 8,
    suit: 'clubs'
  },
  {
    number: 9,
    suit: 'spades'
  },
  {
    number: 9,
    suit: 'diamonds'
  },
  {
    number: 9,
    suit: 'hearts'
  },
  {
    number: 9,
    suit: 'clubs'
  },
  {
    number: 10,
    suit: 'spades'
  },
  {
    number: 10,
    suit: 'diamonds'
  },
  {
    number: 10,
    suit: 'hearts'
  },
  {
    number: 10,
    suit: 'clubs'
  },
  {
    number: 11,
    suit: 'spades'
  },
  {
    number: 11,
    suit: 'diamonds'
  },
  {
    number: 11,
    suit: 'hearts'
  },
  {
    number: 11,
    suit: 'clubs'
  },
  {
    number: 12,
    suit: 'spades'
  },
  {
    number: 12,
    suit: 'diamonds'
  },
  {
    number: 12,
    suit: 'hearts'
  },
  {
    number: 12,
    suit: 'clubs'
  },
  {
    number: 13,
    suit: 'spades'
  },
  {
    number: 13,
    suit: 'diamonds'
  },
  {
    number: 13,
    suit: 'hearts'
  },
  {
    number: 13,
    suit: 'clubs'
  }
];

//call my variables
var spades = [];
var diamonds = [];
var hearts = [];
var clubs = [];
var sortedDeck = [spades, diamonds, hearts, clubs];

//sort the deck by suit
var sort = function(element, index, array) {
  switch (element.suit) {
    case 'spades':
      spades.push(element);
      break;

    case 'diamonds':
      diamonds.push(element);
      break;

    case 'hearts':
      hearts.push(element);
      break;

    case 'clubs':
      clubs.push(element);
      break;
  }
}

//run the sort function for each element to sort into the suit variables
deck.forEach(sort);

// console.log(sortedDeck);
//go through each array to see which one has 12 elements because 1 card is missing
var getShortestArray = function(cards) {
  for(var i=0; i<cards.length; i++) {
    if (cards[i].length === 12) {
      findMissing(cards[i]);
    }
  } 
}

var findMissing = function(cards) {
  for (var i=0; i<13; i++) {
    debugger;
    if (cards[i].number != i+1) {
      var missingNumber = i+1;
      console.log('The missing number is ' +  missingNumber +  ' of ' +  cards[i].suit);
      return;
    }
    else if(i===12) {
      console.log('The missing card is 13 of ' + cards[i-1].suit);
    }
  }
}

getShortestArray(sortedDeck);