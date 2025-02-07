let myArray = [0, 1, 2, 3, 4, 5];

//shallow and deep copies

//in js array has shallow copies (same reference point)

let myHeros = new Array(1, 2, 3, 4, 5);

// console.log(myArray);
// console.log(myArray[0]);

// //methods
// myArray.push(6); //adds a value => 6
// myArray.push(7); //adds a value => 7
// myArray.pop(); //removes last element
// myArray.unshift(9); //adds an element at the top
// myArray.shift(); //removes the first element
// console.log(myArray.includes(3)); //an element exists true or false
// console.log(myArray.indexOf(3)); //index of an element, -1 means doesn't exist
// console.log(myArray);

let newArray = myArray.join(); //turns the array into a string
// console.log(myArray);
// console.log(newArray);

// slice and splice

console.log("A ", myArray);

let myA1 = myArray.slice(1, 3);
console.log(myA1);
console.log("B:", myArray);

let myA2 = myArray.splice(1, 3);
console.log(myA2);
console.log("C:", myArray);
