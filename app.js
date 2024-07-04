// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

//Exporta la función para usarla en otros archivos 
//(similar a la palabra clave "export" cuando se usa webpack)


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// function name(params) 
// let euros = valor de euro/oneEuroIs.USD
// return euros*oneEuroIs.JPY
    
// }

function fromDollarToYen (USD) {
    let euros = USD/oneEuroIs.USD;
return euros*oneEuroIs.JPY
}

function fromEuroToDollar(euro) {
    let valueEuro = euro*oneEuroIs.USD;
    return valueEuro    
}

function fromYenToPound(JPY) {
    let valuePound = JPY/oneEuroIs.JPY;
    return valuePound*oneEuroIs.GBP    
}

console.log(fromDollarToYen(100), fromEuroToDollar(3.5), fromYenToPound(300));
module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound}


