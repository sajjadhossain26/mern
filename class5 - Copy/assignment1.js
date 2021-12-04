function Sajjad() {
  this.age = function (name, year) {
    if (year > 0 && year < 8) {
      return `Your name is ${name} You are a babo`;
    } else if (year >= 8 && year < 18) {
      return `Your name is ${name} You are a tenager`;
    } else if (year >= 18 && year < 35) {
      return `Your name is ${name} You are a Young Man`;
    } else if (year >= 35 && year <= 120) {
      return `Your name is ${name} You are a Old Man`;
    }
  };

  this.angelcal = function (type, width, height, length) {
    if (type == "r") {
      return `${length * width}`;
    } else if (type == "s") {
      return ` ${length * length}`;
    } else if (type == "t") {
      return ` ${0.5 * length * height}`;
    }
  };

  this.agecal = function (myage) {
    return `Your age is ${2021 - myage}`;
  };
}

let name = prompt(`Please type your name`);
let year = Number(prompt(`Please type your age`));
let sajjad = new Sajjad();
console.log(sajjad.age(name, year));

let type = prompt(`Please type r or s or t`);
let width = Number(prompt(`Please type width`));
let height = Number(prompt(`Please type height`));
let length = Number(prompt(`Please type length`));

console.log(sajjad.angelcal(type, width, height, length));

let myage = Number(prompt(`Please type your Date of Birth`));

console.log(sajjad.agecal(myage));
