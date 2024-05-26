
console.log ("[ ITERADORES Y METODOS ARRAYS: ]")

//BUCLES

//Ejercicio 1: Bucle while que imprime los números del 1 al 5

let i = 1;
while (i <= 5) {
    console.log("Numero: ["+ i +"]");
    i++;
}

//Ejercicio [2]: Escribe un bucle for que imprima los elementos de un array de nombres.

const names = ['Jose', 'Victor', 'Luisa', 'Miguel'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//Ejercicio 3: Usar forEach para imprimir los elementos de un array de números multiplicados por 2

const numbers = [2, 3, 5, 7, 10];
numbers.forEach(function(number) {
    console.log(number * 2);
});

// Ejercicio 4: Usar map para crear un nuevo array con los cuadrados de los números de un array dado


const givenarray = numbers.map(number => number ** 2);
console.log("nuevo array de numbers= [" + givenarray +"]");

// Ejercicio 5: Usar find para encontrar el primer número mayor que 10 en un array de números

const arraynumbers = [2, 9, 15, 19, 23, 24];
const firstNumber = arraynumbers.find(function(arraynumber) {
    return arraynumber > 10;
});

console.log("El primer número mayor que 10 en este array es: [" + firstNumber + "]");
 
// Ejercicio 6: Usar some para verificar si hay algún número par en un array de números

const mynumbers = [5, 8, 9, 11, 19, 27];
const evennumber = mynumbers.some(function(mynumber) {
    return mynumber % 2 === 0;
});

if (evennumber) {
    console.log("Si hay algún número par.");
} else {
    console.log("No hay ningún número par.");
}


//Ejercicio 7: Usar filter para crear un nuevo array con los números impares de un array dado

const oddnumbers = mynumbers.filter(function(mynumber) {
    return mynumber % 2 !== 0;
});
console.log("Numeros impares: [" + oddnumbers + "]");


//Ejercicio 8 (Extra): Combinar filter y map para crear un nuevo array con los cuadrados de los números impares de un array dado

const newarray = oddnumbers
    .filter(function(oddnumber) {
        return oddnumber % 2 !== 0;
    })
    .map(function(oddnumber) {
        return oddnumber * oddnumber;
    });
console.log("Nuevo array de numeros impares: = [" + newarray +"]"); 