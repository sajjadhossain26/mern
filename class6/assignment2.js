const developers = [
  [1, "Sajjad Hossain", "Shajahan", "monjura begum", 59, 67, 78, 89, 67, 56],
  [2, "Hossain", "kalam", "jannat", 56, 45, 67, 34, 56, 78],
  [3, "korim", "jalam", "moina", 59, 56, 87, 89, 90, 89],
  [4, "babo", "palam", " toina", 59, 67, 78, 89, 67, 56],
  [5, "emon", "balam", "sadia", 54, 78, 78, 45, 88, 56],
  [6, "sohid", "kalam", "moriom", 50, 55, 66, 89, 99, 90],
  [7, "saiful", "naim", "naima", 59, 67, 78, 89, 67, 56],
  [8, "naim", "mojammel", "oafia", 65, 87, 78, 85, 67, 96],
  [9, "kalam", "kader", "opso", 78, 67, 78, 89, 67, 56],
  [10, "selim", "atik", "niso", 59, 67, 78, 98, 67, 56],
];

for (let i = 0; i < developers[4].length; i++) {
  console.log(`---------------------------------`);
  let bn = developers[i][4];
  let en = developers[i][5];
  let match = developers[i][6];
  let s = developers[i][7];
  let ss = developers[i][8];
  let religion = developers[i][9];

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
        return `congratulations your are passed your cgpa is ${cgpa.toFixed(
          2
        )} & final gpa is ${this.grad(cgpa)}`;
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
Your name is     ${developers[i][1]};
Your Roll number ${developers[i][0]}

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
}
