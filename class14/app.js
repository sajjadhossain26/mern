const counter = document.querySelector(".counter");
const clockForm = document.querySelector(".clock-form");
clockForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let date = this.querySelector("input[type='date']").value;
  let time = this.querySelector("input[type='time']").value;

  setInterval(() => {
    let startDate = new Date();
    let endDate = new Date(date + " " + time);
    let different = Math.floor(endDate.getTime() - startDate.getTime());
    let tsec = Math.floor(different / 1000);
    let tmin = Math.floor(tsec / 60);
    let thour = Math.floor(tmin / 60);
    let tday = Math.floor(thour / 24);

    let hours = thour - tday * 24;
    let min = tmin - tday * 24 * 60 - hours * 60;
    let sec = tsec - tday * 24 * 60 * 60 - hours * 60 * 60 - min * 60;
    counter.innerHTML = `${tday < 10 ? "0" + tday : tday} : ${
      hours < 10 ? "0" + hours : hours
    } : ${min < 10 ? "0" + min : min} : ${sec < 10 ? "0" + sec : sec}`;
  }, 1000);
});

// to do app

const todoForm = document.querySelector(".todo");
const addli = document.querySelector(".addli");
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let task = this.querySelector("input[name='name']").value;
  let select = this.querySelector("select[name='select']").value;

  if (task == "" || select == "") {
    alert("all field are required");
  } else {
    let li = document.createElement("li");
    li.className = "list-group-item";
    let textnode = document.createTextNode(task);
    let btn = document.createElement("button");
    btn.className = "close";
    btn.innerHTML = "&times;";
    li.appendChild(btn);
    li.insertBefore(textnode, btn);
    addli.appendChild(li);
    this.querySelector("input[name='name']").value = "";
    this.querySelector("select[name='select']").value = "";

    btn.addEventListener("click", function () {
      this.parentElement.remove();
    });
  }
});
