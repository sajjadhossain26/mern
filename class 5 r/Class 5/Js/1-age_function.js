let name = prompt("Your name here");
let age = Number(prompt("Your Age here"));

function Pepolelist() {
  this.pepolever = function (name, age) {
    if (age >= 0 && age <= 5) {
      return `${name} You age is ${age} you are a baby`;
    } else if (age >= 6 && age <= 17) {
      return `${name} You age is ${age} you are a tenager`;
    } else if (age >= 18 && age <= 40) {
      return `${name} ${name} You age is ${age} you are a Young`;
    } else if (age >= 40 && age < 100) {
      return `${name} ${name} You age is ${age} you are a Old`;
    } else {
      return `${name} Please type you correct age`;
    }
  };
}

let people = new Pepolelist();

console.log(people.pepolever(name, age));
