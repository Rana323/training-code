// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const data = [17, 21, 23];
const data1 = [12, 5, -5, 0, 4];
console.table(data);
console.log(`${data[0]} and ${data[1]}`);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} c `;
  }
  console.log(str);
};
printForecast(data1);
