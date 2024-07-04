// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function () {
       const { fromEuroToDollar } = require('./app.js');

    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be 156.5 Yen", function () {

    const { fromDollarToYen } = require('./app.js');
  
    expect(fromDollarToYen(100)).toBe(14626.168224299065);
})

test("One thousand Yen should be 0.87 GBP", function () {

    const { fromYenToPound} = require('./app.js');

       expect(fromYenToPound(300)).toBe(1.6677316293929714);
})