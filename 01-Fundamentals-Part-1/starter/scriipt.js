// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;

// let markMass = 95;
// let markHeight = 1.88;
// let johnMass = 85;
// let johnHeight = 1.76;

// let bmimark = markMass / markHeight ** 2 ;

// let bmiJohn  = johnMass / (johnHeight * johnHeight);

// let markHigherBmi = bmimark > bmiJohn;
// console.log(bmimark,bmiJohn,markHigherBmi);

// const name='Rohit';
// const job = 'developer';

// const my_desc = "I am " + name + ',and my profile is ' + job ;
// console.log(my_desc);

// const my_desc_es6_new = `I am ${name},and my profile is ${job}(es6)`;
// console.log(my_desc_es6_new);

// if(bmimark > bmiJohn){
//     console.log(`Mark BMI is${bmimark} higher than johns`);
// }
// else{
//     console.log(`John BMI is ${bmiJohn} higher than johns`);
// }

// console.log(`Marks BMI ${bmimark} is higer than Jogns${bmiJohn}`);

// const dolphinsScore = (96 + 108 + 89)/3;
// const koalasScore =(88 + 91 + 110)/3;

// const dolphinsScore = (97 + 112 + 101)/3;
// const koalasScore =(109 + 95 + 123)/3;

const dolphinsScore = (97 + 112 + 81)/3;
const koalasScore =(109 + 95 + 86)/3;
console.log(dolphinsScore,koalasScore);

// if(dolphinsScore > koalasScore){
//     console.log(`Dolphins win the match with ${dolphinsScore} score`);
// }
//     else if(koalasScore > dolphinsScore) {
//         console.log(`koal win the match with ${koalasScore} score`);
// }
// else if(dolphinsScore == koalasScore){
//  console.log(`both team score is equal`);
// }

// Bonus 1

// if(dolphinsScore > koalasScore && dolphinsScore >= 100){
//     console.log(`Dolphins win the match with ${dolphinsScore} score`);
// }
//     else if(koalasScore > dolphinsScore & koalasScore >=100) {
//         console.log(`koal win the match with ${koalasScore} score`);
// }
// else if(dolphinsScore == koalasScore && dolphinsScore >=100 && koalasScore >=100){
//  console.log(`both team score is equal`);
// }
// else{
//     console.log('both team not qualify score for win');
// }


// condition(Ternary) Oprator
// const age = 17;

// age >=18 ? console.log('you can drive') : console.log('you can not drive');

// const myData = age >=18 ? 'can drive' : ' can not drive';
// console.log(myData);


// Challenge -4 

const x = 40;

const tip = x >=50 && x<=300 ? x * 15/100 : x * 20/100;
const totalBill = x +tip;
console.log(`The bill was ${x},The tip was ${tip},total value ${totalBill}`);