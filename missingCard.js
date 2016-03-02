
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
  {
    number: 7,
    suit: 'hearts'
  },
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

var spades = [];
var diamonds = [];
var hearts = [];
var clubs = [];

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

deck.forEach(sort);
console.log(spades);
console.log(diamonds);
console.log(hearts);
console.log(clubs);