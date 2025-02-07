let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString()); //changes the format to a readable format
// console.log(myDate.toDateString()); //changes the format to day-month-date-year format
// console.log(myDate.toISOString()); //changes the format to date(y-m-d)-time-timezone
// console.log(myDate.toLocaleString()); //changes the format to date(d-m-y)-time
// console.log(myDate.toLocaleDateString()); //changes the format to date(d-m-y)
// console.log(typeof myDate);

// let myCreatedDate = new Date("2023-01-14");
// let myCreatedDate = new Date("02-07-2025");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.getTime());

// let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(Math.floor(myTimeStamp / 1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
  })
);
