const developers = [
  {
    Roll: 1,
    name: "Sajjad Hossain",
    father: "Shajahan",
    mother: "monjura begum",
    bn: 59,
    en: 67,
    match: 78,
    s: 89,
    ss: 67,
    religion: 56,
  },
  {
    Roll: 2,
    name: "Hossain",
    father: "kalam",
    mother: "jannat",
    bn: 56,
    en: 45,
    match: 67,
    s: 34,
    ss: 56,
    religion: 78,
  },
  {
    Roll: 3,
    name: "korim",
    father: "jalam",
    mother: "moina",
    bn: 59,
    en: 56,
    match: 87,
    s: 89,
    ss: 90,
    religion: 89,
  },
  {
    Roll: 4,
    name: "babo",
    father: "palam",
    mother: " toina",
    bn: 59,
    en: 67,
    match: 78,
    s: 89,
    ss: 67,
    religion: 56,
  },
  {
    Roll: 5,
    name: "emon",
    father: "balam",
    mother: "sadia",
    bn: 54,
    en: 78,
    match: 78,
    s: 45,
    ss: 88,
    religion: 56,
  },
  {
    Roll: 6,
    name: "sohid",
    father: "kalam",
    mother: "moriom",
    bn: 50,
    en: 55,
    match: 66,
    s: 89,
    ss: 99,
    religion: 90,
  },
  {
    Roll: 7,
    name: "saiful",
    father: "naim",
    mother: "naima",
    bn: 59,
    en: 67,
    match: 78,
    s: 89,
    ss: 67,
    religion: 56,
  },
  {
    Roll: 8,
    name: "naim",
    father: "mojammel",
    mother: "oafia",
    bn: 65,
    en: 87,
    match: 78,
    s: 85,
    ss: 67,
    religion: 96,
  },
  {
    Roll: 9,
    name: "kalam",
    father: "kader",
    mother: "opso",
    bn: 78,
    en: 67,
    match: 78,
    s: 89,
    ss: 67,
    religion: 56,
  },
  {
    Roll: 10,
    name: "selim",
    father: "atik",
    mother: "niso",
    bn: 59,
    en: 67,
    match: 78,
    s: 98,
    ss: 67,
    religion: 56,
  },
];

developers.map((data) => {
  console.log(`---------------------------------`);
  let bn = data.bn;
  let en = data.en;
  let match = data.match;
  let s = data.s;
  let ss = data.ss;
  let religion = data.religion;

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
        return `congratulations ${
          data.name
        }, your are passed your cgpa is ${cgpa.toFixed(
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
Your name is     ${data.name};
Your Roll number ${data.Roll}

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
});
