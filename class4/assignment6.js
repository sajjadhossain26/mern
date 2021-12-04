let currencycal = (currency, amount) => {
  if (currency == "usd" || "USD") {
    console.log(
      `Your Currency ${currency} Convert To BDT Price = ${amount * 82} TAKA`
    );
  } else if (currency == "cad" || "CAD") {
    console.log(
      `Your Currency ${currency} Convert To BDT Price = ${amount * 68} TAKA`
    );
  } else if (currency == "pound" || "POUND") {
    console.log(
      `Your Currency ${currency} Convert To BDT Price = ${amount * 115} TAKA`
    );
  } else if (currency == "euro" || "EURO") {
    console.log(
      `Your Currency ${currency} Convert To BDT Price = ${amount * 97} TAKA`
    );
  }
};

let currency = prompt(
  `Please type your currency name USD OR CAD OR POUND OR EURO`
);
let amount = Number(prompt(`Please enter amount`));
console.log(currencycal(currency, amount));
