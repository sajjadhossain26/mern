

let currency = prompt('What Currency you hoave (USD, EURO, POUND, CAD)');
let amount =Number(prompt('Your Amount'));

function Currenccal(){

    this. converter = function(currency, amount){

    if(currency =='USD'){
        return `$${amount} ${currency} = ${ amount * 85} BDT`;
    }
    else if(currency =='EURO'){
        return `Euro ${amount} ${currency} = ${ amount * 98.24} BDT`;
    }
    else if(currency =='POUND'){
        return `£${amount} ${currency} = ${ amount * 1.15} BDT`;
    }
    else if(currency =='CAD'){
        return `CAD ${amount} ${currency} = ${ amount * 0.073} BDT`;
    }
    else{
       return `Please Type Again Something missing.`;
    }

}
}

let currenc = new Currenccal();

console.log(currenc.converter(currency, amount));