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
  clockM.innerHTML = `: ${zero(m)}`;
  clockS.innerHTML = `${zero(s)}`;
  clockAMPM.innerHTML = `${h >= 12 ? "PM" : "AM"}`;
}, 1000);
