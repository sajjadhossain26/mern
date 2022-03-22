import Alert from "./src/Alert.js";

const dev_data_form = document.querySelector("#dev_data_form");
const msg = document.querySelector(".msg");

dev_data_form.addEventListener("submit", function (e) {
  e.preventDefault();

  let form_data = new FormData(e.target);
  let data = Object.fromEntries(form_data.entries());
  let { name, email, tel, photo } = data;
  if (name == "" || email == "" || tel == "") {
    msg.innerHTML = Alert.danger("All field are required!");
  } else {
    msg.innerHTML = Alert.success("Data Stable");
  }
});
