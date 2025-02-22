let myObject = {
  js: "JavaScript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  console.log(key, myObject[key]);
}

let programming = ["js", "rb", "python", "cpp"];

for (const key in programming) {
  console.log(programming[key]);
}
