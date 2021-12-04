

let weight = Number(prompt('Type your weight in kg'));
let formula = prompt(`Type your hight Formula in (inch, Centimeter, foot)`);
let hight = Number(prompt(`Type your weight in ${formula}`));

let totalinch = (0.0254);
let Centimeter = (0.01);
let foot = (0.3048);


function Bmi(){

  this.bmical = function(weight, hight, formula){


    if(formula == "inch"){

      let meter = `${hight * totalinch}`;
      let totalmeter = ` ${meter * meter} `;
      return `Your tolat Bmi ${(weight) / (totalmeter)}`;

    }   
    else if(formula == "centimeter"){

      let meter = `${hight * Centimeter}`;
      let totalmeter = `${meter * meter}`;
      return `Your tolat Bmi ${(weight) / (totalmeter)}`;
    }
    else if(formula == "foot"){

      this.meter = `${hight * foot}`;
      this.totalmeter = `${meter * meter}`;
      return `Your tolat Bmi ${(weight) / (totalmeter)}`;
    }

    else{
        return `Please Type Again Something missing.`;
    }

    }
}

let totalbmi = new Bmi();

console.log(totalbmi.bmical(weight, hight, formula));