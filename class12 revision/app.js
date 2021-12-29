const name = document.querySelector(".name");
const email = document.querySelector(".email");
const year = document.querySelector(".year");
const h1 = document.querySelector("h1");
const submit = document.querySelector(".submit");
const result = document.querySelector("#result");
const submitform = document.querySelector("#submitform");
submitform.addEventListener("click", (e) => {
  e.preventDefault();
  let pattern = /^[a-z0-9_.-@\\]{5,12}$/;

  if (name.value == "" || email.value == "" || year.value == "") {
    result.innerHTML = `<p class="alert alert-danger" style="color:red ;">all field are required</p>`;
  } else {
    result.innerHTML = "";
  }
  email.style.border = email.value ? "1px solid black" : "1px solid red";
  name.style.border = name.value ? "1px solid black" : "1px solid red";
  year.style.border = year.value ? "1px solid black" : "1px solid red";
});
