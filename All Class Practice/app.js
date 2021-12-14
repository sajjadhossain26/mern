let name = "sajjad";
let roll = 10;
let bn = 40;
let en = 65;
let match = 90;
let s = 66;
let ss = 98;
let religion = 90;

let Result = function () {
  this.grad = function (mark) {
    if (mark > 0 && mark < 33) {
      return "you are failed";
    } else if (mark >= 33 && mark < 40) {
      return ` D`;
    } else if (mark >= 40 && mark < 50) {
      return ` C`;
    } else if (mark >= 50 && mark < 60) {
      return ` B`;
    } else if (mark >= 60 && mark < 70) {
      return ` A-`;
    } else if (mark >= 70 && mark < 80) {
      return ` A`;
    } else if (mark >= 80 && mark <= 100) {
      return ` A+`;
    }
  };

  this.gpa = function (mark) {
    if (mark > 0 && mark < 33) {
      return `0`;
    } else if (mark >= 33 && mark < 40) {
      return ` 1`;
    } else if (mark >= 40 && mark < 50) {
      return ` 2`;
    } else if (mark >= 50 && mark < 60) {
      return ` 3`;
    } else if (mark >= 60 && mark < 70) {
      return ` 3.5`;
    } else if (mark >= 70 && mark < 80) {
      return ` 4`;
    } else if (mark >= 80 && mark <= 100) {
      return ` 5`;
    }
  };

  this.cgpa = function (bn, en, match, s, ss, religion) {
    let totalmark = bn + en + match + s + ss + religion;
    let finalmark = totalmark / 6;
    if (
      bn == 0 ||
      en == 0 ||
      match == 0 ||
      s == 0 ||
      ss == 0 ||
      religion == 0
    ) {
      return `Your are failed`;
    } else {
      return `Congratulations your are passed your cgpa is ${finalmark} and final grad is ${this.cgpa(
        cgpa
      )}`;
    }
  };

  this.cgpa = function (cgpa) {
    if (cgpa >= 0 && cgpa < 1) {
      return "F";
    } else if (cgpa >= 1 && cgpa < 2) {
      return "D";
    } else if (cgpa >= 2 && cgpa < 3) {
      return "C";
    } else if (cgpa >= 3 && cgpa < 3.5) {
      return "B";
    } else if (cgpa >= 3.5 && cgpa < 4) {
      return "A-";
    } else if (cgpa >= 4 && cgpa < 5) {
      return "A";
    } else if (cgpa == 5) {
      return "A+";
    }
  };
};

let result = new Result();
console.log(`

subject                  grad                    gpa   
${bn}                    ${result.grad(bn)}      ${result.gpa(bn)}
${en}                    ${result.grad(en)}      ${result.gpa(en)}
${match}                 ${result.grad(match)}   ${result.gpa(match)}
${s}                     ${result.grad(s)}       ${result.gpa(s)}
${ss}                    ${result.grad(ss)}      ${result.gpa(ss)}
${religion}              ${result.grad(religion)}      ${result.gpa(religion)}
================================================================================================
  ${result.cgpa(
    result.gpa(bn),
    result.gpa(en),
    result.gpa(match),
    result.gpa(s),
    result.gpa(ss),
    result.gpa(religion)
  )}  

`);
