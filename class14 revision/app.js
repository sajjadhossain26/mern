const countForm = document.querySelector(".count-form");
const show = document.querySelector(".show");
countForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let datev = this.querySelector("input[type='date']").value;
  let timev = this.querySelector("input[type='time']").value;

  setInterval(() => {
    let startDate = new Date();
    let endDate = new Date(datev + " " + timev);
    let different = Math.floor(endDate.getTime() - startDate.getTime());
    let sec = Math.floor(different / 1000);
    let min = Math.floor(sec / 60);
    let hour = Math.floor(min / 60);
    let day = Math.floor(hour / 24);

    let thours = hour - day * 24;
    let tmin = min - day * 24 * 60 - thours * 60;
    let tsec = sec - day * 24 * 60 * 60 - thours * 60 * 60 - tmin * 60;
    show.innerHTML = `${day}:${thours}:${tmin}:${tsec}`;
  }, 1000);
});
