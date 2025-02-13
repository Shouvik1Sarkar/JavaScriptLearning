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

const name1 = "Somraaj Majumdar Som";
console.log(name1.slice(8, 16));
const nameExtracted = name1.substr(8);
console.log("...", nameExtracted);
const nameUpperCase = name1.toUpperCase();
console.log("++++++++", nameUpperCase);
const nameLowererCase = name1.toLowerCase();
console.log(nameLowererCase);
console.log(name1.indexOf("a"));
console.log(name1.endsWith("om"));

const name3 = "Somraaj Majumdar Rohan";
console.log("++++");

console.log(name3.startsWith("Somraaj")); // Output: true
console.log(name3.startsWith("So")); // Output: true
console.log(name3.startsWith("Majumdar")); // Output: false

const c = "   Name      ";
console.log(c);
console.log(c.trim());

console.log(name3.includes("Somraaj"));
console.log(name3.includes("So"));
console.log(name3.includes("raa"));
console.log(name3.includes("majumdar"));
console.log(name3.includes("3"));
console.log(name3.replaceAll("Majumdar", "lazy"));
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("dog", "monkey"));

console.log(name3.split(" "));
let url = "https://x.com/home?lang=en";
console.log(url.replaceAll("/", "-"));

let firstName = "Somraaj";
let serName = "Majumdar";
let lastName = "Rohan";

console.log(firstName.concat(" ", serName, " ", lastName));
console.log("Hello! I am", firstName, serName);
console.log("Hello! I am " + firstName + " " + serName);
console.log(`Hello! I am ${firstName} ${serName}`);
