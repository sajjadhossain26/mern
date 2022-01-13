const form = document.querySelector("#sign-up-form");
const msg = document.querySelector(".msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = form.querySelector('input[placeholder="name"]');
  let email = form.querySelector('input[placeholder="email"]');
  let radio = form.querySelector('input[type="radio"]:checked');
  let check = form.querySelectorAll('input[type="checkbox"]:checked');
  for (let i = 0; i < check.length; i++) {
    console.log(check[i].value);
  }
  console.log(radio.value);
  // console.log(check);

  if (name.value == "" || email.value == "") {
    msg.innerHTML = validation("all field are required");
  } else {
    msg.innerHTML = validation("data stable", "success");
  }
});

const clock = document.querySelector(".clock");
setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let ampm = h > 12 ? "PM" : "AM";
  let equal = "";
  if (h > 0 && h <= 12) {
    equal = h;
  } else {
    equal = h - 12;
  }

  clock.innerHTML = `${Math.abs(equal)} : ${m} : ${s} : ${ampm}`;
}, 1000);

const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const output = document.querySelector(".output");
const counter = document.querySelector(".counter");
const loading = document.querySelector(".loader");
let counterV;
let count;
start.addEventListener("click", () => {
  counterV = counter.value;

  count = setInterval(() => {
    output.innerHTML = counterV;
    if (counterV == 0) {
      clearInterval(count);
    }
    counterV--;
    let width = loadings(counter.value, counterV);
    loading.style.width = `${width}%`;
    if (width >= 50 && width <= 100) {
      loading.style.background = "green";
    } else if (width < 50 && width >= 20) {
      loading.style.background = "yellow";
    } else {
      loading.style.background = "red";
    }
  }, 1000);
});

// start.addEventListener("click", () => {
//   output.innerHTML = "love asitece.....";
//   setTimeout(() => {
//     output.innerHTML = "We love mern stack";
//   }, 2000);
// });

// stop.addEventListener("click", () => {
//   output.innerHTML = "nuton love asitece.....";
//   setTimeout(() => {
//     output.innerHTML = "We love android development";
//   }, 2000);
// });
// let count = 0;
// let clear;
// start.addEventListener("click", function () {
//   clear = setInterval(() => {
//     output.innerHTML = count++;
//   }, 1000);
// });
// stop.addEventListener("click", function () {
//   clearInterval(clear);
// });
// reset.addEventListener("click", function () {
//   count = 0;
//   output.innerHTML = count;
//   clearInterval(clear);
// });
