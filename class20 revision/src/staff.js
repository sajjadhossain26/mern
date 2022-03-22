export default class Staff {
  constructor(skill, location) {
    (this.skill = skill),
      (this.location = location),
      (this.food = "Bereyani"),
      (this.hoby = "Coding");
    this.game = () => {
      return `I play cricket`;
    };
  }

  cal(name, year) {
    let date = new Date();
    let age_cal = date.getFullYear() - year;
    return `Your name is ${name}, I am from ${
      this.location
    } I am a ${age_cal} years old. and I am a ${this.skill}, I like to eat ${
      this.food
    }, my hobby is ${this.hoby} ${this.game()} ${this.info()} `;
  }

  info() {
    return `I am from info please don't mind`;
  }
}
