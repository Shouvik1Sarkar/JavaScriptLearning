let score = "33";

// console.log(typeof score);

score = "33abc";
score = null;
score = undefined;
score = true;
score = false;
let valueInNumber = Number(score);
// console.log(valueInNumber); // NaN for "33abc" and undefined and 0 for null and false 1 for true
// console.log(typeof valueInNumber); // NaN is also a number

// "33" => 33
// "33abc" => NaN
// true => 1 and false => 0
// null => 0

let isLoggedIn = "aaa";
let booleanLoggedIn = Boolean(isLoggedIn);
// console.log(booleanLoggedIn); // false for "" 0 and true for 1 "randomText"

// ****************************************operation****************************************

// console.log("1" + "2"); //both are treated as string
// console.log("1" + 2); //both are treated as string
// console.log(1 + "2"); //both are treated as string
// console.log("1" + 2 + 3); //all are treated as string
// console.log(1 + 3 + "2"); //first two are treated as numbers and then string after the first operation

let a = 3;
let b = a++;

console.log(a); //3
console.log(b); //4

//a++ returns the value first and then increments the value

let c = 3;
let d = ++c;

console.log(c); //3
console.log(d); //4

//++a  increments the value first  and then returns the value

// console.log(a);

// x = 3n;
// b = x++;

// console.log(x);
// console.log(b);
