const skill = document.querySelectorAll('input[name="skill"]');
const show = document.querySelector(".show");
skill.forEach((data) => {
  data.addEventListener("change", function () {
    let all_data = document.querySelectorAll('input[name="skill"]:checked');
    let data_arr = [];
    all_data.forEach((arr) => {
      data_arr.push(arr.value);
    });
    let dvalue = "";

    data_arr.map((getvalue) => {
      dvalue += `
      <li class="list-group-item">${getvalue}</li>
    
     `;
    });
    show.innerHTML = dvalue;
  });
});
// analock clock apps

setInterval(() => {
  const h = document.querySelector(".h");
  const m = document.querySelector(".m");
  const s = document.querySelector(".s");

  let time = new Date();
  let getH = time.getHours();
  let getM = time.getMinutes();
  let gets = time.getSeconds();

  s.style.transform = `rotate(${getR(gets, 60)}deg)`;
  m.style.transform = `rotate(${getR(getM, 60)}deg)`;
  h.style.transform = `rotate(${getR(getH, 12)}deg)`;
}, 1000);

function getR(current, time) {
  return (360 * current) / time;
}
//
let cald = [];
let topm;
function getvalue(val) {
  cald.push(val);

  document.querySelector(".topm").innerHTML = cald.join("");
}

function showcal() {
  let calstring = cald.join("");
  document.querySelector(".mainm").innerHTML = eval(calstring);
}
function allclear() {
  cald = [];
  document.querySelector(".topm").innerHTML = "0";
  document.querySelector(".mainm").innerHTML = "0";
}

function back() {
  cald.pop();
  document.querySelector(".topm").innerHTML = cald.join("");
}
