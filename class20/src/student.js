export const data = [
  {
    name: "Sajjad Hossain",
    age: 21,
    skill: "mern stack developer",
  },
  {
    name: " Hossain",
    age: 21,
    skill: "mern stack developer",
  },
  {
    name: "Sajjad ",
    age: 21,
    skill: "mern stack developer",
  },
  {
    name: " Hossain",
    age: 21,
    skill: "mern stack developer",
  },
];
export default class Student {
  constructor(name, skill, age) {
    this.name = name;
    this.skill = skill;
    this.age = age;
    this.food = "biriyani";
    this.game = () => {
      return "I love Programming";
    };
  }

  static info() {
    return `This is ${this.name}. I am a ${this.skill}. I am ${
      this.age
    } years old . I love Biriyani and I also love ${this.game()}`;
  }

  agecal(name, year) {
    let date = new Date();
    let agecal = date.getFullYear() - year;
    return `Your name is ${name}. your age is ${agecal} `;
  }
}
