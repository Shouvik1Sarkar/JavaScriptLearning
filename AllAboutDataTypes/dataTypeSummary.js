//primitive
// 7 types of primitives

// 1. Number 2. String 3. Boolean 4. Null 5. Undefined 6. Symbol 7. BigInt
let a = [10, 1, 23, 12];
let b = a;
b[0] = 12222;

console.log(a);
console.log(b);

//non-primitive

// 1. Array 2. Object 3. Function

let xy = 23;
let yz = xy;
yz += 12;
console.log(xy);
console.log(yz);
