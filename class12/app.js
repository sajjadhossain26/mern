const send = document.querySelector("#send");
const name = document.querySelector("#name");
const year = document.querySelector("#year");
const ptext = document.querySelector("#ptext");

send.addEventListener("click", () => {
  ptext.innerHTML = agecal(name.value, year.value);
  name.value = "";
  year.value = "";
});
