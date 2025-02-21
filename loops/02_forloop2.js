// for (let i = 0; i < 20; i += 2) {
//   console.log(i);
// }

// for (let i = 0; i < 20; i++) {
//   console.log(i);
// }

// for (let i = 0; i < 20; i++) {
//   console.log("I am sorry dear");
// }

let a = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

let person_list = [
  "p1",
  "p2",
  "p3",
  "soul mate",
  "p5",
  "p6",
  "p7",
  "p8",
  "p9",
  "p10",
];

for (let i = 0; i < person_list.length; i++) {
  if (person_list[i] == "soul mate") {
    console.log("Yay I found my soulmate 😃");
    console.log(i);

    break;
  }
  console.log(i);
  console.log(`Sorry ${person_list[i]} 😔`);
}

// let name = "Tony Stark";
// for (let i = 0; i < name.length; i++) {
//   console.log(name[i]);
// }

let dormammu_says = ".";
while (true) {
  if (dormammu_says == "I give up") break;
  console.log("dormammu i've come to bargain");
}
