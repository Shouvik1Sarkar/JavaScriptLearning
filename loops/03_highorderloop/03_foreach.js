let coding = ["js", "ruby", "java", "python", "cpp"];

// function printMe(item) {
//   console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((element) => {
//   console.log(element);
// });

// foreach has 3 parameters:
coding.forEach((element, index, arr) => {
  console.log(element, index, arr);
});

const myCoding = [
  {
    languageName: "JS",
    languageFileName: ".js",
  },
  {
    languageName: "C++",
    languageFileName: ".cpp",
  },
  {
    languageName: "Python",
    languageFileName: ".py",
  },
];

myCoding.forEach((i) => {
  console.log(i);
});
