let userheight = +prompt(`Please put your Height`);
let userweight = +prompt(` Please put your weight weight`);

let bmi = (weight, height) => {
  let heightcal = height * 0.3048;
  let bmical = weight / heightcal ** 2;
  console.log("Your Score", bmical);
  if (bmical < 18.5) {
    return `Underweight, You Need To inforve You Weight ${(
      18.5 - bmical
    ).toFixed(2)} Meter`;
  }
  if (bmical >= 18.5 && bmical <= 24.9) {
    return ` Normal Weight `;
  }
  if (bmical >= 25.0 && bmical <= 29.9) {
    return ` Overweight`;
  }
  if (bmical >= 30.0 && bmical <= 34.9) {
    return ` Obesity Class I`;
  }
  if (bmical >= 35.0 && bmical <= 39.9) {
    return ` Obesity ClassII`;
  }
  return ` Obesity Class III`;
};

console.log(bmi(userweight, userheight));
