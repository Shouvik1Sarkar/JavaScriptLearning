let Indian_main_team = ["Rohit Sharma"];
Indian_main_team.push("Virat");
// console.log(Indian_main_team);

Indian_main_team.push(
  "Shubman Gill",
  "Shreyas Iyer",
  "KL Rahul",
  "Ravindra Jadeja",
  "Shardul Thakur",
  "Jasprit Bumrah",
  "Mohammed Siraj",
  "Kuldeep Yadav",
  "Mohammed Shami"
);
// console.log(Indian_main_team);
let extra_players = [
  "Ravichandran Ashwin",
  "Ishan Kishan",
  "Prasidh Krishna",
  "Suryakumar Yadav",
];
// console.log(extra_players);

// console.log(Indian_main_team.concat(extra_players));
let total_team = [
  ...Indian_main_team,
  ...extra_players,
  //   ...[1, 2, 3, 4],
  //   ...[2, 3, 4, 5],
  //   ...[3, 4, 5, 6],
];
// console.log(total_team);

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(a);
// console.log(total_team.slice(0, 2));

// console.log(a.splice(3, 3));
// console.log(a);
// let captains_under_training = total_team.splice(0, 2);
// console.log("..........", captains_under_training);
// total_team.unshift("Rohit", "virat");
// console.log(total_team);
// total_team.pop();
// console.log(total_team);
// total_team.splice(3, 2);
// console.log(total_team);

// total_team.splice(3, 0, "Shreyas Iyer", "KL Rahul");
// total_team.sort();
console.log(total_team);
console.log(total_team.indexOf("Shubman Gill") + 1);
console.log(total_team[4]);
console.log(total_team.includes("KL Rahul"));
console.log(total_team.length);
console.log("What am I even typing I don't know ");

total_team.map((a) => {
  console.log(a);
});
// so map converts it into this....
//I am posing in front of came to record a video and look cool
