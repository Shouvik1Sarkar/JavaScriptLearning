let fruit_basket = ["apple", "mango", "avocado", "lichi", "grapes"];
for (const fruit in fruit_basket) {
  //   console.log(fruit_basket[fruit]);
}

let city = "New York";

for (const character in city) {
  //   console.log(city[character]);
}

let employee = {
  Jonathan: 22,
  Daniel: 25,
  George: 29,
  Silva: 30,
};

for (const key in employee) {
  //   console.log(key, employee[key]);
}
for (const key in employee) {
  //   console.log(`Name: ${key} || age:${employee[key]}`);
}

fruit_basket.forEach((element) => {
  //   console.log(element);
});

let names = "ShouvikSarkar";

function print_fruits(element) {
  console.log(element);
}
fruit_basket.forEach(print_fruits);

let new_array = [
  {
    name: "Shouvik",
    age: 23,
  },
  {
    name: "Somraaj",
    age: 23,
  },
  {
    name: "Shivaam",
    age: 22,
  },
];

new_array.forEach((e) => {
  console.log(e["name"]);
});
