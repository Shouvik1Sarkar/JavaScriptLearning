let a = "Shouvik";
let b = new String("Sarkar");
a.nickname = "Dev";
b.nickname = "Dev";
b.age = "22";

console.log(a instanceof String);
console.log(b instanceof String);

console.log(a instanceof Object);
console.log(b instanceof Object);
let name = new String("Somraaj");
console.log(name);
let x = new String("John"); // x is an object
let y = new String("John");
console.log(x === y);
console.log(x);
console.log(y);

let naaam1 = "Shouvik";
let naaam2 = "Shouvik";

console.log(naaam1 === naaam2);
console.log(naaam1 == naaam2);
let age = 22;
let ageString = String(age);
console.log(age + 1);
console.log(ageString + 1);
let x1 = null;

// console.log(x1.toString());
console.log(String(x1));

// string methods
console.log("Somraaj".length);

// console.log(018 == "018");
// console.log(017 == "017");
