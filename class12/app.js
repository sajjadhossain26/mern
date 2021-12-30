const name = document.querySelector("#name");
const year = document.querySelector("#year");
const result = document.querySelector("#result");
const send = document.querySelector("#send");

send.addEventListener("click", () => {
  if (name.value == "" || year.value == "") {
    result.innerHTML = `<p class="alert alert-danger">All field are required</p>`;
  } else {
    result.innerHTML = agecal(name.value, year.value);
  }
  name.value = "";
  year.value = "";
});

/**
 * bibaho calculator
 */
const name1 = document.querySelector("#name1");
const year1 = document.querySelector("#year1");
const result1 = document.querySelector("#result1");
const send1 = document.querySelector("#send1");
const gender = document.querySelector("#gender");
const msg = document.querySelector("#msg");

send1.addEventListener("click", () => {
  let pattern = /^male|female$/;
  if (pattern.test(gender.value) == false) {
    msg.innerHTML = "please put male or female";
    gender.style.border = "1px solid red";
  } else {
    msg.innerHTML = "";
    gender.style.border = "1px solid black";
  }
  if (name1.value == "" || year1.value == "" || gender.value == "") {
    result1.innerHTML = `<p class="alert alert-danger">All field are required</p>`;
  } else {
    result1.innerHTML = bibahoage(name1.value, year1.value, gender.value);
  }
  name1.value = "";
  year1.value = "";
  gender.value = "";
});

/**
 * currency converter
 */
const amount = document.querySelector("#amount");
const getamount = document.querySelector("#getamount");
const convert = document.querySelector("#convert");
const convertResult = document.querySelector("#convertResult");

convert.addEventListener("click", () => {
  convertResult.innerHTML = `Now your current amount ${
    getamount.value * amount.value
  } taka`;
});
