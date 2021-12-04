let areaType = prompt(
  `Please Type your Field area. rectangle=\(r\), square=\(s\), triangle=\(t\), `
);
let width = Number(prompt(`Please Type your Field area Width`));
let hight = Number(prompt(`Please Type your Field area width of Hight`));

function FieldArea() {
  this.Field = function (areaType, width, hight) {
    if (areaType == "s") {
      return width * width;
    } else if (areaType == "r") {
      return width * hight;
    } else if (areaType == "t") {
      return 0.5 * width * hight;
    } else {
      return `Please Type Again Something missing.`;
    }
  };
}

let fieldArea = new FieldArea();

console.log(`Your result : ${fieldArea.Field(areaType, width, hight)}`);
