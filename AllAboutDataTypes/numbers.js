let number = 400;
// console.log(number);

let score = new Number(100);
// console.log(score);
// console.log(score.toString()); //converts numbers to string
// console.log(score.toFixed(2)); //converts numbers to string with two(or given number) decimal places

let otherNumber = 12.89;

// console.log(otherNumber.toPrecision(3));

/*
    123.9 .toPrecision(3) => 124
    123.89 .toPrecision(4) => 123.9
*/

//++++++++++++++++++++++++++++++++Math+++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //Turns negatives to positive
// console.log(Math.round(4.8)); //Rounds the number.
// console.log(Math.ceil(4.2)); //top number
// console.log(Math.floor(4.2)); //lower number
// console.log(Math.max(4, 5, 6, 7, 9, 8)); //maximum value
// console.log(Math.min(4, 5, 6, 7, 9, 8)); //minimum number
// console.log(Math.pow(2, 3)); //2 to the power of 3
// console.log(Math.sqrt(9)); //square root of 9
console.log(Math.floor(Math.random() * 10 + 1));

const max = 20;
const min = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //to get a number between min and max
