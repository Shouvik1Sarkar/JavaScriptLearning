const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  if (greet == " ") {
    break;
  }
  console.log(`each character is ${greet}`);
}

// Maps:
const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1);

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(`${key}: ${value}`);
}

const myObject = {
  game1: "NFS",
  game2: "Spider Man",
};
//for of doesn't work on objects

// for (const game of myObject) {
//   console.log(game);
// }

console.log("+++++++");

// does not work

// for (const key in map) {
//   console.log(map[key]);
// }

//for of for string

let a = "Shouvik";
for (const element of a) {
  console.log(element);
}
