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
