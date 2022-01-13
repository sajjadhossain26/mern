const clock = document.querySelector(".clocktext");
const clockH = document.querySelector(".clockH");
const clockM = document.querySelector(".clockM");
const clockS = document.querySelector(".clockS");
const clockAMPM = document.querySelector(".clockAMPM");

setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  if (h == 0) {
    h = 1;
  } else {
    h = date.getHours();
  }
  clockH.innerHTML = `${h > 12 ? zero(h - 12) : zero(h)}`;
  clockM.innerHTML = `:${zero(m)}`;
  clockS.innerHTML = `${zero(s)}`;
  clockAMPM.innerHTML = `${h >= 12 ? "PM" : "AM"}`;
}, 1000);

const show = document.querySelector(".date");
const today = document.querySelector(".day");
let date = new Date();
let day = date.getDate();
let year = date.getFullYear();
let month = date.getMonth();

if (month == 0) {
  month += 1;
} else {
  month = date.getMonth();
}
show.innerHTML = `${zero(month)}-${zero(day)}-${zero(year)}`;
let findday = [
  "sunday",
  "monday",
  "tueseday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
let d = date.getDay();
today.innerHTML = findday[d];

// to do apps

const amount = document.querySelector(".amount");
const add = document.querySelector(".add");
const list = document.querySelector(".list");

add.addEventListener("click", function () {
  let li = document.createElement("li");
  li.classList = "list-group-item";
  li.innerHTML = amount.value;
  list.appendChild(li);
  amount.value = "";
});

// counter app

const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const showcount = document.querySelector(".show-count");
const countValue = document.querySelector(".count-value");
const loader = document.querySelector(".loader");

let reset;
let count;
start.addEventListener("click", () => {
  count = countValue.value;

  reset = setInterval(function () {
    showcount.innerHTML = count;
    if (count == 0) {
      clearInterval(reset);
    }
    count--;
    let width = loaders(countValue.value, count);
    loader.style.width = `${width}%`;
    if (width > 0 && width <= 20) {
      loader.style.background = "red";
    } else if (width > 20 && width <= 50) {
      loader.style.background = "yellow";
    } else {
      loader.style.background = "green";
    }
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(reset);
});
