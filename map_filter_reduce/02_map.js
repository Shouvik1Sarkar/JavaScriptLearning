// const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNums = myNumber.map((num) => num + 10);
// console.log(newNums);

// // forEach does not return any value
// myNumber.forEach((num) => {
//   console.log(num + 10);
// });

// // console.log(n2);

// let multi = myNumber.map((e) => {
//   return e * 2;
// });
// console.log(multi);

// //chaining

// let newNum3 = myNumber
//   .map((e) => e * 10)
//   .map((e) => e + 1)
//   .filter((e) => e > 40);

// console.log(newNum3);

const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

let x = kvArray.map((e) => e);
// console.log(x);

// const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

// console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
// console.log(kvArray);

let new_devs = [
  { name: "Dev_1", age: 22 },
  { name: "Dev_2", age: 20 },
  { name: "Dev_3", age: 25 },
  { name: "Dev_4", age: 29 },
  { name: "Dev_5", age: 23 },
  { name: "Dev_6", age: 20 },
];

let selection = new_devs.map(({ name, age }) => ({
  [name]: age,
}));
console.log(selection);
function createObject(key, value) {
  return { [key]: value };
}

console.log(createObject("name", "Alice")); // Output: { name: "Alice" }
console.log(createObject("score", 95));
