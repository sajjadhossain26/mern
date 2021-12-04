function gpa(mark) {
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
}

function grad(mark) {
  let grad;
  if (mark > 0 && mark < 33) {
    grad = "F";
  } else if (mark >= 33 && mark < 40) {
    grad = "D";
  } else if (mark >= 40 && mark < 50) {
    grad = "C";
  } else if (mark >= 50 && mark < 60) {
    grad = "B";
  } else if (mark >= 60 && mark < 70) {
    grad = "A-";
  } else if (mark >= 70 && mark < 80) {
    grad = "A";
  } else if (mark >= 80 && mark <= 100) {
    grad = "A+";
  }
  return grad;
}

let cgpa = (bn, en, match, s, ss, rel) => {
  let total_cgpa = bn + en + match + s + ss + rel;
  let cgpa = total_cgpa / 6;
  if (bn == 0 || en == 0 || match == 0 || s == 0 || ss == 0 || rel == 0) {
    return "you are failed";
  } else {
    return `Your CGPA is ${cgpa} & final GPA ${totalcgpa(cgpa)} `;
  }
};

function totalcgpa(cgpa) {
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
}
