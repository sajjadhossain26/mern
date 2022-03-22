// Instant checkbox result app

const skill = document.querySelectorAll("input[type='checkbox']");
const show = document.querySelector(".list-group");

skill.forEach((data) => {
  data.addEventListener("change", function () {
    let check_value = document.querySelectorAll(
      "input[type='checkbox']:checked"
    );
    let arr = [];
    check_value.forEach((check) => {
      arr.push(check.value);
    });
    let value = "";
    arr.map((get) => {
      value += `
         <li class="list-group-item">${get}</li>
        `;
    });
    show.innerHTML = value;
  });
});

// analog clock

const sec = document.querySelector(".s");
const min = document.querySelector(".m");
const hour = document.querySelector(".h");

setInterval(() => {
  let date = new Date();
  let get_sec = date.getSeconds();
  let get_min = date.getMinutes();
  let get_hour = date.getHours();

  sec.style.transform = `rotate(${clock(60, get_sec)}deg)`;
  min.style.transform = `rotate(${clock(60, get_min)}deg)`;
  hour.style.transform = `rotate(${clock(12, get_hour)}deg)`;

  function clock(time, current_time) {
    return (360 * current_time) / time;
  }
}, 1000);

// calculator app
let data = [];
const get_val = (val) => {
  data.push(val);

  document.querySelector(".top-monitor").innerHTML = data.join("");
  document.querySelector(".bottom-monitor").innerHTML = 0;
};

const result = () => {
  let final = data.join("");
  document.querySelector(".bottom-monitor").innerHTML = eval(final);
};

const clears = () => {
  data = [];
  document.querySelector(".top-monitor").innerHTML = 0;
  document.querySelector(".bottom-monitor").innerHTML = 0;
};

const back = () => {
  data.pop();
  document.querySelector(".top-monitor").innerHTML = data.join("");
  document.querySelector(".bottom-monitor").innerHTML = 0;
};
