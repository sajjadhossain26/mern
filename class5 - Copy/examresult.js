let name = "Sajjad hossain";
let roll = 20;
let mark = 50;

let bn = prompt(`Bangla`);
let en = prompt(`English`);
let match = prompt(`Match`);
let s = prompt(`Science`);
let ss = prompt(`Social Science`);
let religion = prompt(`religion`);

let Result = function () {
  this.mark = function (mark) {
    if (mark > 0 && mark < 33) {
      return "Failed";
    } else if (mark >= 33 && mark < 40) {
      return "D";
    } else if (mark >= 40 && mark < 50) {
      return "C";
    } else if (mark >= 50 && mark < 60) {
      return "B";
    } else if (mark >= 60 && mark < 70) {
      return "A-";
    } else if (mark >= 70 && mark < 80) {
      return "A";
    } else if (mark >= 80 && mark <= 100) {
      return "A+";
    }
  };

  this.gpa = function (mark) {
    let gpa;
    if (mark > 0 && mark < 33) {
      gpa = 0;
    } else if (mark >= 33 && mark < 40) {
      gpa = 1;
    } else if (mark >= 40 && mark < 50) {
      gpa = 2;
    } else if (mark >= 50 && mark < 60) {
      gpa = 3;
    } else if (mark >= 60 && mark < 70) {
      gpa = 3.5;
    } else if (mark >= 70 && mark < 80) {
      gpa = 4;
    } else if (mark >= 80 && mark <= 100) {
      gpa = 5;
    }
    return gpa;
  };
  this.cgpa = function (bn, en, match, s, ss, religion) {
    let total = bn + en + match + s + ss + religion;
    let cgpa = total / 6;
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
      return `congratulations your are passed your cgpa is ${cgpa} & final gpa is ${this.grad(
        cgpa
      )}`;
    }
  };

  this.grad = function (cgpa) {
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
Your name is     ${name};
Your Roll number ${roll}

Subject     mark         GPA                          GRAD
Bangla      ${bn}     ${result.gpa(bn)}         ${result.grad(result.gpa(bn))}
English     ${en}    ${result.gpa(en)}         ${result.grad(result.gpa(en))}
Match       ${match} ${result.gpa(match)}      ${result.grad(result.gpa(match))}
Science     ${s}     ${result.gpa(s)}          ${result.grad(result.gpa(s))}
social      ${ss}    ${result.gpa(ss)}         ${result.grad(result.gpa(s))}
Religion    ${religion} ${result.gpa(religion)} ${result.grad(
  result.gpa(religion)
)}
=================================================================================
           ${result.cgpa(
             result.gpa(bn),
             result.gpa(en),
             result.gpa(match),
             result.gpa(s),
             result.gpa(ss),
             result.gpa(religion)
           )}
`);

// let name = "Sajjad hossain";
// let roll = 20;

// let bn = prompt(`Bangla`);
// let en = prompt(`English`);
// let match = prompt(`Match`);
// let s = prompt(`Science`);
// let ss = prompt(`Social Science`);
// let religion = prompt(`religion`);

// function Result() {
//   this.grad = function (mark) {
//     if (mark > 0 && mark < 33) {
//       return "Failed";
//     } else if (mark >= 33 && mark < 40) {
//       return "D";
//     } else if (mark >= 40 && mark < 50) {
//       return "C";
//     } else if (mark >= 50 && mark < 60) {
//       return "B";
//     } else if (mark >= 60 && mark < 70) {
//       return "A-";
//     } else if (mark >= 70 && mark < 80) {
//       return "A";
//     } else if (mark >= 80 && mark <= 100) {
//       return "A+";
//     }
//   };

//   this.gpa = function (mark) {
//     let gpa;
//     if (mark > 0 && mark < 33) {
//       gpa = 0;
//     } else if (mark >= 33 && mark < 40) {
//       gpa = 1;
//     } else if (mark >= 40 && mark < 50) {
//       gpa = 2;
//     } else if (mark >= 50 && mark < 60) {
//       gpa = 3;
//     } else if (mark >= 60 && mark < 70) {
//       gpa = 3.5;
//     } else if (mark >= 70 && mark < 80) {
//       gpa = 4;
//     } else if (mark >= 80 && mark <= 100) {
//       gpa = 5;
//     }
//     return gpa;
//   };
//   this.cgpa = function (bn, en, match, s, ss, religion) {
//     let total = bn + en + match + s + ss + religion;
//     let cgpa = total / 6;
//     if (
//       bn == 0 ||
//       en == 0 ||
//       match == 0 ||
//       s == 0 ||
//       ss == 0 ||
//       religion == 0
//     ) {
//       return `Your are failed`;
//     } else {
//       return `congratulations your are passed your cgpa is ${cgpa} & final gpa is ${this.tgrad(
//         cgpa
//       )}`;
//     }
//   };

//   this.tgrad = function (cgpa) {
//     if (cgpa >= 0 && cgpa < 1) {
//       return "F";
//     } else if (cgpa >= 1 && cgpa < 2) {
//       return "D";
//     } else if (cgpa >= 2 && cgpa < 3) {
//       return "C";
//     } else if (cgpa >= 3 && cgpa < 3.5) {
//       return "B";
//     } else if (cgpa >= 3.5 && cgpa < 4) {
//       return "A-";
//     } else if (cgpa >= 4 && cgpa < 5) {
//       return "A";
//     } else if (cgpa == 5) {
//       return "A+";
//     }
//   };
// }

// let result = new Result();

// console.log(`
// subject   mark            GRAD                       GPA
// bangla   ${bn}           ${result.grad(bn)}         ${result.gpa(bn)}
// english  ${en}           ${result.grad(en)}         ${result.gpa(en)}
// match    ${match}        ${result.grad(match)}      ${result.gpa(match)}
// s        ${s}            ${result.grad(s)}          ${result.gpa(s)}
// ss       ${ss}           ${result.grad(ss)}         ${result.gpa(ss)}
// religion ${religion}     ${result.grad(religion)}   ${result.gpa(religion)}
// =================================================================================================
// ${result.cgpa(
//   result.gpa(bn),
//   result.gpa(en),
//   result.gpa(match),
//   result.gpa(s),
//   result.gpa(ss),
//   result.gpa(religion)
// )}

// `);
