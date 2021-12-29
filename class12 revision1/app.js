const send = document.querySelector("#send");
const name = document.querySelector("#name");
const year = document.querySelector("#year");
const ptext = document.querySelector("#ptext");

send.addEventListener("click", () => {
  if (name.value == "" || year.value == "") {
    ptext.innerHTML = `<p class="alert alert-danger">All Field are required!</p>`;
  } else {
    ptext.innerHTML = agecal(name.value, year.value);
    name.value = "";
    year.value = "";
  }
});
