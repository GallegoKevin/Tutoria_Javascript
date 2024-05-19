
//CALCULADORA 

//Primer numero a ingresar
let numberA = parseFloat(prompt("Ingresar el primer número:"));

// Segundo numero a ingresar 
let numberB = parseFloat(prompt("Ingresar el segundo número:"));

// Operacion a ingresar 
let operacion = prompt("Ingresar la operación  (+, -, *, /, %):");


let resultado;
if (operacion === "+") {
    resultado = numberA + numberB;
} else if (operacion === "-") {
    resultado = numberA - numberB;
} else if (operacion === "*") {
    resultado = numberA * numberB;
} else if (operacion === "/") {
    if (numberB !== 0) {
        resultado = numberA / numberB;
    } else {
        resultado = "Error: No se puede dividir.";
    }
} else if (operacion === "%") {
    resultado = numberA % numberB;
} else {
    resultado = "Operación incorrecta";
}

// Mostrar el resultado de la operación
alert("El resultado es: " + resultado);
