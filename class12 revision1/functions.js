function agecal(name, year) {
  let date = new Date();
  age = date.getFullYear() - year;

  return `<p class="alert alert-${
    ages(age).status
  }">Hi ${name}, Your age is ${age} years old. now you are ${
    ages(age).name
  }</P>`;
}
function ages(age) {
  if (age > 0 && age < 10) {
    return {
      name: "babo",
      status: "success",
    };
  } else if (age >= 10 && age < 20) {
    return {
      name: "ten-agers",
      status: "dark",
    };
  } else if (age >= 20 && age < 35) {
    return {
      name: "young",
      status: "danger",
    };
  } else if (age >= 35 && age <= 100) {
    return {
      name: "very old",
      status: "primary",
    };
  } else {
    return {
      name: "apni to vhai vhot",
      status: "danger",
    };
  }
}
