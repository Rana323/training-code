'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Short Circuiting (&& and ||)

//restaurant.name =20;
//restaurant.number = 23;
restaurant.number = 0; // 0 and '' undefine value or operator get false value then you can used naulish (??) operator

// or oprator get true value
// 1 way with ?
const guest = restaurant.number ? restaurant.number : 9;
//console.log(guest);

// 2nd way
const guest1 = restaurant.number || 8;
//console.log(guest1);

// New Nullish Operator(??) , NOTE: here solve 0 and '' undefine value in true
const guest3 = restaurant.number ?? 3;
//console.log(guest3);

// && oprator get false value if find first value false . it will not check next value
// if get value tures all , it will retuern last value of true

// here is && get value of false(null),then not check next true value
//console.log('hii' && 23 && null && 'rohit');

//Logical Assignment operator
const rest1 = {
  name: 'host',
  //numerGuests: 20,
  numerGuests: 0,
};
const rest2 = {
  name: 'host',
  owner: 'Rana',
};

// 1st way
// rest1.numerGuests = rest1.numerGuests || 5;
// rest2.numerGuests = rest2.numerGuests || 10;

// 2nd way
// rest1.numerGuests ||= 5;
// rest2.numerGuests ||= 10;

// 3rd way when value false :like 0 , ' '(null,undefine) ,then used Nullish Operator(??)
// rest1.numerGuests ??= 5;
// rest2.numerGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

/// Challenge = 1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1 solution

const [player1, player2] = game.players;
console.log(player1, player2);

const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

const allPlayer = [...player1, ...player2];
console.log(allPlayer);

const players1Final = ['Thiago', ' Coutinho', ' Perisic', ...player1];
console.log(players1Final);
