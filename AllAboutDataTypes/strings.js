console.log("Hello" + " world"); //concatination

let name = "Shouvik";
let repo = 10;
console.log(name + repo + " value"); //very bad practice
console.log(`hello my name is ${name} and my repo count is ${repo}`); //good practice

let name1 = new String("Shouvik");
console.log(name1.__proto__);
console.log(name1.length);
console.log(name1.charAt(1));
console.log(name1.indexOf("h"));

//substring
console.log(name1.substring(0, 4));
//slice
console.log(name1.slice(-6, 4));

//trim

let newstr1 = "   Helloss   ";
console.log(newstr1);
console.log(newstr1.trim());

let newstr2 = "https://shouvik/shouvik%20sarkar";

console.log(newstr2.replace("%20", "-"));
console.log(newstr2.includes("_"));
console.log(newstr2.includes("shouvik"));

let newstr3 = "Shouvik-Sarkar-String";
console.log(newstr3.split("-"));

console.log(
  "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
);

const str = "The quick brown fox jumps over the lazy dog.";

console.log(str.length);
console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"
