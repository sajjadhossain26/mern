// const btn = document.querySelector(".btn");

// function clickbtn(e) {
//   console.log(e.target);
// }
// btn.addEventListener("click", clickbtn);
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");

// function devs(name, year, calback) {
//   let age = calback(year);
//   console.log(`Hi ${name} You are ${age} Years old`);
// }

// devs("Sajjad", 2000, function (year) {
//   return 2022 - year;
// });

// const mark = 60;

// let result = new Promise(function (sofol, befol) {
//   if (mark > 32) {
//     sofol("tomi pass");
//   } else {
//     befol("tomi failed");
//   }
// });

// result
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello5");
// let num = 30;
// const prom = new Promise(function (shofol, befole) {
//   if (num > 32) {
//     shofol("tomi pass");
//   } else {
//     befole("Tomi failed");
//   }
// });
// prom
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((mitta) => {
//     console.log(mitta);
//   });

function food() {
  return `biriyani`;
}

async function age() {
  let fod = food();
  console.log(`I am 32 years old and I love ${await fod}`);
}

age();
console.log("1");
console.log("2");
console.log("3");
console.log("4");
