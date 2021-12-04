const developers = [
  ["Sajjad", "Mern stack", 90000],
  ["Hossain", "Laraval", 60000],
  ["kalam", "Django", 80000],
  ["jalam", "Wordpress", 70000],
  ["palam", "Java devs", 60000],
];

let total = 0;
for (let i = 0; i < developers.length; i++) {
  console.log(`
  Name   : ${developers[i][0]},
  Skill  : ${developers[i][1]},
  Salary : ${developers[i][2]},


  `);
  total = total + developers[i][2];
}

console.log(`Total salary: ${total}`);
