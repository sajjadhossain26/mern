import { Staff } from "./staff.js";
export const data = [
  {
    name: "sajjad hossain",
    age: 20,
    skill: "mern",
  },
  {
    name: "sajjad hossain",
    age: 20,
    skill: "mern",
  },
  {
    name: "sajjad hossain",
    age: 20,
    skill: "mern",
  },
];
export class Student extends Staff {
  constructor(skill, location) {
    super(skill, location);
    this.skill = skill;
    this.location = location;
  }
  st() {
    return `sajjad hossain`;
  }
}
