'use strict';

const arr = [1, 2, 4];
const badNewArr = [5, 6, arr[0], arr[1]];
console.log(badNewArr);
// Iterables : Arrays,string,Maps, sets .NOT objects
// spread operator
const newArr = [8, 9, ...arr];
console.log(newArr);

// join 2 array
const myArr = [...newArr, ...arr];
console.log(myArr);

const restaurant = {
  adress: 'Jalandhar',
  orederList: function (first, second, third) {
    console.log(
      ` your first order is ${first} second ${second} and third order is ${third}`
    );
  },
};

// example with help prompt
const interable = [
  //   prompt('what you want for first order'),
  //   prompt('what you want for drink'),
  //   prompt('what you want for sweet'),
];
console.log(interable);

restaurant.orederList(interable[0], interable[1], interable[2]);

// width spread operator
restaurant.orederList(...interable);

//Spread operator used in  Object
const newRestaurant = {
  founder: 'Rohit Rana',
  ...restaurant,
};
console.log(newRestaurant);

// copy object  Note : Here we can see on new object value not affect old copy object with help of spread operator
const newRestaurantCopy = { ...restaurant };
newRestaurantCopy.founder = 'Mohit';
console.log(newRestaurantCopy);
console.log(newRestaurant);
