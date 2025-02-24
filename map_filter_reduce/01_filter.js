const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNum.filter((num) => {
  return num > 4;
});

console.log(newNums);
console.log(myNum);

// newNums.pop();
console.log("+++++++++++++++++");

console.log(newNums);
console.log(myNum);

let newNums2 = [];

myNum.forEach((item) => {
  if (item > 4) {
    newNums2.push(item);
  }
});

// console.log(newNums2);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];
let userBook = books.filter((bk) => {
  return bk.genre === "History";
});
console.log(userBook[0].title);

// userBook = books.filter((bk) => {
//   return bk.genre === "History" && bk.publish >= 1995;
// });

userBook[0]["title"] = ".....";
console.log(userBook);

console.log(books);

// let a = [1, 2, 3, 4, 5, 6, 7];
// let b = a;

// console.log(a);
// console.log(b);
// b.pop();
// console.log(a);
// console.log(b);

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function func(v) {
  return v > 4;
}

let n = num.filter(func);
console.log("+++++", n);

// let newNum = num;

// newNum.pop();

// console.log(num);
// console.log(newNum);

// let newNum2 = num.filter((i) => i > 4);
// console.log(newNum2);

// newNum2.pop();

// console.log(newNum2);
// console.log(num);

let new_devs = [
  { name: "Dev_1", age: 22, projects: 7, internship: true, tech: "MERN" },
  { name: "Dev_2", age: 20, projects: 3, internship: false, tech: "MERN" },
  { name: "Dev_3", age: 25, projects: 6, internship: false, tech: "MEAN" },
  { name: "Dev_4", age: 29, projects: 17, internship: true, tech: "MERN" },
  { name: "Dev_5", age: 23, projects: 8, internship: true, tech: "MEAN" },
  { name: "Dev_6", age: 20, projects: 2, internship: false, tech: "MERN" },
];

let hiring_1 = new_devs.filter((credibility) => {
  return credibility.projects > 5;
  //   return credibility.projects > 5 && credibility.internship == true;
});

hiring_1[0].name = "LLLLLLLLLLLLLLLL";

console.log(hiring_1);
