let arr1 = [2, 21, 45, 67, 54];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

let str = "Shouvik";

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// classical for loop does not work on objects
let myOb = {
  a111: "a1",
  a222: "a2",
};
let keys = Object.keys(myOb);
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i], myOb[keys[i]]);
}
console.log(Object.keys(myOb));
console.log(Object.values(myOb));

let fruit_basket = ["apple", "mango", "avocado", "lichi", "grapes"];
for (let i = 0; i < fruit_basket.length; i++) {
  console.log(fruit_basket[i]);
}
let name = "Rajib Sarkar";
for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

let entries = Array.from(map);
console.log("++++++++++++++++++++++++++");
console.log(entries);

for (let i = 0; i < entries.length; i++) {
  console.log(entries[i][0], entries[i][1]); // key, value
}
// for (let i = 0; i < 4; i++) {
//   console.log(map[i]);
// }

let employee = {
  Jonathan: 22,
  Daniel: 25,
  George: 29,
  Silva: 30,
};

let entries2 = Array.from(employee);

console.log(entries2);

// for (let i = 0; i < 4; i++) {
//   console.log(employee[i]);
// }
// let keyss = Object.keys(employee);
// for (let i = 0; i < keyss.length; i++) {
//   console.log(keyss[i], employee[keyss[i]]);
// }

console.log(Object.keys(employee));

// for of loop

//on Array

let my_fav_languages = ["Bengali", "Hindi", "English", "Sanskrit", "Japanese"];

for (const language of my_fav_languages) {
  console.log(language);
}

let word = "New York";

for (const character of word) {
  console.log(character);
}

let newmap = new Map();

newmap.set("1", "one");
newmap.set("2", "two");
newmap.set("3", "three");
newmap.set("4", "four");

console.log(newmap);

for (const pair of newmap) {
  console.log(pair);
}
for (const [key, value] of newmap) {
  console.log(key, value);
}
// let employee = {
//   Jonathan: 22,
//   Daniel: 25,
//   George: 29,
//   Silva: 30,
// };
// for (const element of employee) {
//   console.log(element);
// }
const obj = { 100: "a", 2: "b", 1: "c", x: "d" };
console.log(Object.keys(obj)); // ["1", "2", "100", "x"]

let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newNum = myNum.map((num) => {
  return num * 2;
});

console.log(newNum);

let new_devs = [
  { name: "Dev_1", age: 22 },
  { name: "Dev_2", age: 20 },
  { name: "Dev_3", age: 25 },
  { name: "Dev_4", age: 29 },
  { name: "Dev_5", age: 23 },
  { name: "Dev_6", age: 20 },
];

let x = new_devs.map((item) => {
  if (item.age > 21) {
    return item;
  }
});
console.log(x);
