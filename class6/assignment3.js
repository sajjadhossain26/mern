const employee = [
  ["Sajjad", "co-instructor", 21],
  ["Hossain", "instructor", 11],
  ["kalam", "co-instructor", 15],
  ["jalam", "instructor", 22],
  ["palam", "co-instructor", 18],
  ["talam", "co-instructor", 54],
  ["naim", "co-instructor", 44],
  ["selim", "co-instructor", 25],
  ["saiful", "co-instructor", 30],
  ["sohid", "co-instructor", 12],
];

for (let i = 0; i < employee.length; i++) {
  if (employee[i][2] < 18) {
    console.log(`${employee[i][0]},Sorry you are not eligible for this job`);
  } else if (employee[i][2] >= 18 && employee[i][2] <= 40) {
    console.log(`${employee[i][0]}, You are welcome Thanks for coming`);
  } else if (employee[i][2] > 40) {
    console.log(
      `${employee[i][0]}, Salute boss thanks for support us. you are not eligible for this job because you age above 40.`
    );
  }
}
