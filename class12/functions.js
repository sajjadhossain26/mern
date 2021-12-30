/**
 * age calculator
 * @param {*} name
 * @param {*} year
 * @returns
 */
function agecal(name, year) {
  let date = new Date();
  let age = date.getFullYear() - year;
  return `<p class="alert alert-${ageStatus(age).color}">
  Hi ${name}, Now You Are ${age} Years old and You are ${
    ageStatus(age).status
  }</p>
    `;
}

function ageStatus(age) {
  if (age > 0 && age <= 10) {
    return {
      color: "success",
      status: "babo",
    };
  } else if (age > 10 && age <= 18) {
    return {
      color: "primary",
      status: "Ten agers",
    };
  } else if (age > 18 && age <= 35) {
    return {
      color: "info",
      status: "Young",
    };
  } else if (age > 35 && age <= 150) {
    return {
      color: "warning",
      status: "Old",
    };
  } else {
    return {
      color: "danger",
      status: "please put currect year",
    };
  }
}
/**
 * bibaho calculator
 * @param {*} name
 * @param {*} year
 * @returns
 */
function bibahoage(name, year, gender) {
  let date = new Date();
  let age = date.getFullYear() - year;
  if ((age >= 18 && gender == "female") || (age >= 21 && gender == "male")) {
    return `<p class="alert alert-success">Hi ${name}, apni ${gender} apnar boyos ekon ${age} apni nischinte bibaho koron</p>`;
  } else if (age < 18 && gender == "female") {
    return `<p class="alert alert-info">Hi ${name}, apni ${gender} apnar boyos ekono ${age} aro ${
      18 - age
    } bochor por amar shate deka koron</p>`;
  } else if (age < 21 && gender == "male") {
    return `<p class="alert alert-warning">Hi ${name},apni ${gender} apnar boyos ekono ${age} aro ${
      21 - age
    } bochor por amar shate deka koron</p>`;
  } else {
    return `<p class="alert alert-danger">Please enter currect year</p>`;
  }
}
/**
 * full form function
 */

function fullform(name, email, number, date, password, cpassword) {
  let pattern = /^[a-z0-9.]*@gmail.com$/;

  if (
    name == "" ||
    email == "" ||
    number == "" ||
    date == "" ||
    password == "" ||
    cpassword == ""
  ) {
    return `<p class="alert alert-danger">All field are required<p>`;
  } else if (pattern.test(email) == false) {
    return `<p class="alert alert-danger">please enter valid email</p>`;
  } else if (password !== cpassword) {
    return `<p class="alert alert-danger">your password not same</p>`;
  } else {
    return `<p class="alert alert-success">your name ${name},
    your email ${email},
    your number${number},
    your date${date},
    your password${password},
    your confirm password${cpassword}</p>`;
  }
}
