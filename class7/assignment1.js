const devs = [
  {
    name: "Sajjad",
    age: 20,
    skill: "MERN stack",
    income: 1000,
  },

  {
    name: "Hossain",
    age: 22,
    skill: "Laravel",
    income: 900,
  },
  {
    name: "Rahim",
    age: 24,
    skill: "Django",
    income: 800,
  },
  {
    name: "Karim",
    age: 26,
    skill: "Golan",
    income: 700,
  },
  {
    name: "Wordpress",
    age: 29,
    skill: "Java",
    income: 600,
  },
];
total = 0;
devs.map((dev) => {
  console.log(`
    Name: ${dev.name},
    Age: ${dev.age},
    Skill: ${dev.skill},
    Income: ${dev.income}
    `);

  total = total + dev.income;
});
console.log(`Total income: ${total}`);
