let marvel_heros = [
  "Iron Man",
  "Thor",
  "Spider Man",
  "Captain America",
  "Hawk Eye",
  "Black Widow",
];
// console.log(marvel_heros.join());

let dc_heros = ["Super Man", "Bat Man", "Wonder Woman", "AquaMan", "Flash"];

// comcat method
let new_team = marvel_heros.concat(dc_heros);
console.log(new_team);

//spread operator
let new_team2 = [...marvel_heros, ...dc_heros];
console.log(new_team2);

let a1 = [1, 2, 3, 4, 5, 6, [22, 33, 45, 6, [54, 6, 7]]];
console.log(a1);
console.log(a1.flat(Infinity));
console.log(Array.isArray(a1));
let name = "Shouvik";
console.log(Array.from(name));
console.log(Array.from({ key: "hey" }));
let a = "hello";
let a11 = "hello";
let a2 = "hello";
let a3 = "hello";
console.log(Array.of(a, a11, a2, a3));
