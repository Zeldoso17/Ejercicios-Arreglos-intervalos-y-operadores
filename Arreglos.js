
let numeros = [1, 5, 6, 9, 7, 2, 5, 4]

// modificamos el dato de la posicion 5 a 10
numeros[5] = 10;

// filtramos el array por los numeros mayores a 5
let numero = numeros.filter((numero) => {
    return numero > 5;
});

console.log(numero);