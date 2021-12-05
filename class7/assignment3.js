const alldata = [
  {
    name: "sajjad",
    age: 20,
    skill: "mern",
  },
  {
    name: "Hossain",
    age: 50,
    skill: "javascript",
  },
  {
    name: "kalam",
    age: 14,
    skill: "React",
  },
  {
    name: "rahim",
    age: 33,
    skill: "java",
  },
  {
    name: "karim",
    age: 17,
    skill: "full stack",
  },
];

alldata.map((data) => {
  console.log(`
 Name   : ${data.name},
 Age    : ${data.age},
 skill  :${data.skill}
  `);
  if (data.age > 0 && data.age < 18) {
    console.log("Sorry you are not allowed because you are under 18");
  } else if (data.age >= 18 && data.age <= 40) {
    console.log("You are most welcome please come our workspace");
  } else if (data.age > 40 && data.age <= 100) {
    console.log("Sorry you are too old. you need rest");
  } else {
    console.log("please enter your valid age");
  }
});
