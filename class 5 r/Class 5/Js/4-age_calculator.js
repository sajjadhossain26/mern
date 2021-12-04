let name = prompt("Your name here");
let date = Number(prompt("Type your date of birth here"));

function Agecal() {
  this.people = function (name, date) {
    if (date >= 1 && date <= 6) {
      return `${name} Now your age is ${2021 - date}`;
    } else if (date >= 7 && date <= 17) {
      return `${name} Now your age is ${2021 - date}`;
    } else if (date >= 18 && date <= 30) {
      return `${name} Now your age is ${2021 - date}`;
    } else if (date >= 31 && date <= 50) {
      return `${name} আপনি এখন প্রাপ্তবয়স্ক এখনই তো আপনি আপনার পরিবারের খেয়াল রাখার সময়। আপার বয়স ${
        2021 - date
      } বছর`;
    } else if (date >= 51 && date <= 100) {
      return `${name} আপনি এখন বৃদ্ধ আপনার আর বয়স নেই । আপার বয়স ${
        2021 - date
      } বছর`;
    } else {
      return `${name} আপনি কি ভুত নাকি তো বয়স কোন মানুষের হয় না সহজে ${
        2021 - date
      } বছর`;
    }
  };
}

let agecal = new Agecal();

console.log(agecal.people(name, date));
