const students = [
  {
    roll: 01,
    name: "sajjad Hossain",
    age: 9,
  },
  {
    roll: 02,
    name: "sajjad Hossain",
    age: 9,
  },
  {
    roll: 03,
    name: "sajjad Hossain",
    age: 9,
  },
  {
    roll: 04,
    name: "sajjad Hossain",
    age: 9,
  },
  {
    roll: 05,
    name: "sajjad Hossain",
    age: 9,
  },
  {
    roll: 06,
    name: "sajjad Hossain",
    age: 9,
  },
];
const phonebook = [
  {
    name: "sajjad hossain",
    relation: "brother",
    mobile: "01865243109",
  },
  {
    name: "hossain",
    relation: "uncle",
    mobile: "01863443109",
  },
  {
    name: "jalam",
    relation: "grandfather",
    mobile: "018652409",
  },
  {
    name: "naima",
    relation: "sister",
    mobile: "43392398792",
  },
  {
    name: "momin",
    relation: "little bro",
    mobile: "0186343109",
  },
];
const devs = [
  {
    id: 01,
    name: "sajjad",
    skill: "mern stack",
  },
  {
    id: 02,
    name: "hossain",
    skill: "Laravel",
  },
  {
    id: 03,
    name: "babo",
    skill: "Django",
  },
  {
    id: 04,
    name: "jalam",
    skill: "Golan",
  },
  {
    id: 05,
    name: "kalam",
    skill: "WordPress",
  },
];
console.log(JSON.stringify(students));
console.log(JSON.stringify(phonebook));
console.log(JSON.stringify(devs));

let studentObject =
  '[{"roll":1,"name":"sajjad Hossain","age":9},{"roll":2,"name":"sajjad Hossain","age":9},{"roll":3,"name":"sajjad Hossain","age":9},{"roll":4,"name":"sajjad Hossain","age":9},{"roll":5,"name":"sajjad Hossain","age":9},{"roll":6,"name":"sajjad Hossain","age":9}]';

let phonebookObject =
  '[{"name":"sajjad hossain","relation":"brother","mobile":"01865243109"},{"name":"hossain","relation":"uncle","mobile":"01863443109"},{"name":"jalam","relation":"grandfather","mobile":"018652409"},{"name":"naima","relation":"sister","mobile":"43392398792"},{"name":"momin","relation":"little bro","mobile":"0186343109"}]';

let devsObject =
  '[{"id":1,"name":"sajjad","skill":"mern stack"},{"id":2,"name":"hossain","skill":"Laravel"},{"id":3,"name":"babo","skill":"Django"},{"id":4,"name":"jalam","skill":"Golan"},{"id":5,"name":"kalam","skill":"WordPress"}]';

console.log(studentObject, phonebookObject, devsObject);
console.log(JSON.parse(studentObject));
console.log(JSON.parse(phonebookObject));
console.log(JSON.parse(devsObject));
