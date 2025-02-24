let arr = [1, 2, 3];
let sum = arr.reduce((acc, curval) => acc + curval, 0);
console.log(sum);

let prices = [
  { name: "prod_1", price: 12 },
  { name: "prod_2", price: 20 },
  { name: "prod_3", price: 22 },
  { name: "prod_4", price: 42 },
  { name: "prod_5", price: 2 },
];

let total = prices.reduce((acc, item_price) => acc + item_price.price, 0);

console.log(total);
