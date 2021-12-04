let name = prompt("please enter your name");
let age = prompt("Please enter your Age");
let gender = prompt("Are you male or female?");

console.log(`I am ${age} Yeras old and I'm ${gender}`);

if ((age >= 18 && gender == "female") || (age >= 21 && gender == "male")) {
  console.log(`
  Hi ${name},
  apnar biya korar boyos hoice.
  niscinte biya koron`);
} else if (age < 18 && gender == "female") {
  console.log(`
     Hi ${name},
     apnar ekono biyer boyos hoi nai
     ${18 - age} bocor pore amar sate deka koron`);
} else if (age < 21 && gender == "male") {
  console.log(`
    Hi ${name}, apnar ekono biyer boyos hoi nai
    ${21 - age} year pore amar sate dekha koron`);
} else {
  console.log(`
  Hi ${name},
  doya kore sotik gender enter koron`);
}
