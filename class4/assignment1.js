let agecal = (age) => {
  if (age > 0 && age <= 8) {
    console.log(`you are children`);
  } else if (age > 8 && age < 18) {
    console.log(`you are tenager`);
  } else if (age >= 18 && age <= 30) {
    console.log(`you are young `);
  } else if (age >= 31 && age <= 100) {
    console.log(`you are old `);
  } else {
    console.log(`Please put your correct age`);
  }
};
let age = prompt("Please type your age");
agecal(age);
