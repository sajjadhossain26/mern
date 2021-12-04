let name = prompt("Please enter your name");
let Board = prompt("Please enter your board name");
let roll = prompt("Please enter your Roll number");
let mark = prompt("please enter your mark");

if (mark < 33) {
  console.log(`
  Hello ${name}, You are Failed
  Your board name   :  ${Board}.
  Your Roll Number  :  ${roll}.
  Your  Grade       :  F .
  Your Gpa          :  0
  `);
} else if (mark >= 33 && mark < 40) {
  console.log(`
  Hello ${name}, You are Passed
  Your board name   :  ${Board}.
  Your Roll Number  :  ${roll}.
  Your  Grade       :  D .
  Your Gpa          :  1
  `);
} else if (mark >= 40 && mark < 50) {
  console.log(`
  Hello ${name}, You are Passed
  Your board name   :  ${Board}.
  Your Roll Number  :  ${roll}.
  Your  Grade       :  C .
  Your Gpa          :  2
  `);
} else if (mark >= 50 && mark < 60) {
  console.log(`
  Hello ${name}, You are Passed
  Your board name   :  ${Board}.
  Your Roll Number  :  ${roll}.
  Your  Grade       :  B .
  Your Gpa          :  3
  `);
} else if (mark >= 60 && mark < 70) {
  console.log(`
  Hello ${name}, You are Passed
  Your board name   :  ${Board}.
  Your Roll Number  :  ${roll}.
  Your  Grade       :  A- .
  Your Gpa          :  3.5
  `);
} else if (mark >= 70 && mark < 80) {
  console.log(`
  Hello ${name}, You are Passed
  Your board name   :  ${Board}.
  Your Roll Number  :  ${roll}.
  Your  Grade       :  A .
  Your Gpa          :  4
  `);
} else if (mark >= 80 && mark < 100) {
  console.log(`
  Hello ${name}, You are Passed
  Your board name   :  ${Board}.
  Your Roll Number  :  ${roll}.
  Your  Grade       :  A+ .
  Your Gpa          :  5
  `);
} else {
  console.log(
    `Amar mone hoi na je apni exam diacen. sotik number dia abar cesta koron`
  );
}
