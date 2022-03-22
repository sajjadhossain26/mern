export function agecal(name, year) {
  let age = 2022 - year;
  return `Your name is ${name}, you are ${age} years old`;
}
import { Student } from "./student.js";
export class Staff extends Student {
  constructor(name) {
    super(name);
    this.name = name;
  }
  info() {
    return `I am form staff`;
  }
  test() {
    return `I am form test`;
  }
  check() {
    return `I am form check`;
  }

  goal() {
    return this.agecal("sajjad", 2000);
  }
}
