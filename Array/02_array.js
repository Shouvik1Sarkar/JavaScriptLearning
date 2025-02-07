let marvel_heros = ["Thor", "Iron Man", "Spider Man"];
let dc_heros = ["Super Man", "Flash", "Bat Man"];

//joining arrays

// marvel_heros.push(dc_heros); //It puts second array as array element
// console.log(marvel_heros);

let concat_both = marvel_heros.concat(dc_heros); //adds both in a new array
console.log(concat_both);

//spread operator
let all_new_heros = [...marvel_heros, ...dc_heros]; //adds both in a new array
console.log(all_new_heros);

//flat the nested array

let another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
let real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("hello")); // asks if the input is an array or not
console.log(Array.from("hello")); // converts it into an array

//read it later
console.log(Array.from({ name: "Shouvik" })); // interesting object converts it into an array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //creates array out of variables
