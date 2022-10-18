// const calcAverage = (a, b ,c ) => (a + b + c)/3 ;
// console.log(calcAverage(1,2,3));

// let avgDolhins = calcAverage(44,23,71);
// let avgKoalas = calcAverage(65,54,49);

// console.log(avgDolhins,avgKoalas);

// const checkWinner = function(avgDolhins,avgKoalas){
//     if(avgDolhins >= 2 * avgKoalas){
//          console.log(`Dolhins win ${avgDolhins} vs ${avgKoalas}`);
//     }
//     else if(avgKoalas >= 2 * avgDolhins){
//         console.log(`Koalas win ${avgKoalas} vs ${avgDolhins}`);
//     }
//     else{
//         console.log('no team win');
//     }
// }

//  avgDolhins = calcAverage(85,54,41);
//  avgKoalas = calcAverage(23,34,27);

//  checkWinner(avgDolhins,avgKoalas);


// let number = new Array('1' ,'2','4', '4','5' ,'6');
     
//   for (var i = 0; i < number.length; i++){
//     console.log(i);
//   }

// let my = Object.keys(number);
// console.log(my);

// let my2 = Object.values(number);
// console.log(my2);

// let my3 = Object.entries(number);
// console.log(my3);

//Challenge - 2

// const calcTip = function(bill){
//    return bill >= 50 && bill <= 300 ? bill * 15/100 : bill * 20/100 ;
// }

// //const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 15/100 : bill * 20/100 ;
// // console.log(calcTip(400));

// const bills = [125,555,44];
// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// const totals = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]]
// console.log(bills,tips, totals);

// Challenge - 3 

// const mark = {
//    fullName : "Mark Miller",
//    weight    : 78,
//    height    : 1.69,
//    calcBmi   : function(){
//     this.bmi = this.weight / this.height ** 2;           
//    }
// }
// const john = {
//    fullName : "John Smith",
//    weight    : 92,
//    height    : 1.95,
//    calcBmi   : function(){
//     this.bmi = this.weight / this.height ** 2;           
//    }
// }

// mark.calcBmi();
// john.calcBmi();
// console.log(mark.bmi, john.bmi);

// const value = (markvalue , johnvalue) => markvalue.bmi <= johnvalue.bmi ? `Mark BMI ${markvalue.bmi} is higher than John ${johnvalue.bmi}` : `John BMI ${johnvalue.bmi} is higher than Mark ${mark.bmi} `;
// // if(mark.bmi >= john.bmi){
// //    console.log(`Mark BMI ${mark.bmi} is higher than John ${john.bmi}`);
// // }
// // else{
// //    console.log(`John BMI ${john.bmi} is higher than Mark ${mark.bmi} `);
// // }
// console.log(value(mark,john));

// const birthday = [1991,2000,1994,1993];
// const age =[];
// for(let i = 0;i < birthday.length;i++){
//     age.push(2022 - birthday[i]);
// }
// console.log(age);

// challenge = 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];

const calcTip = function(bill){
   return bill >= 50 && bill <= 300 ? bill * 15/100 : bill * 20/100 ;
}
const tips=[];
const totals = [];

for ( i = 0; i < bills.length; i++){
   const tip = calcTip(bills[i]);
   tips.push(tip);
   totals.push(tip + bills[i]);
}
console.log(bills,tips,totals);