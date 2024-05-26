// Función para solicitar y validar la entrada del usuario
function solicitarNumero(mensaje) {
    let numero;
    do {
        numero = prompt(mensaje);
        if (numero !== null && numero.trim() !== "") {
            numero = parseFloat(numero);
            if (!isNaN(numero)) {
                return numero;
            }
        }
        alert("Por favor, ingrese un número válido.");
    } while (true);
}

function solicitarOperacion() {
    let operacion;
    do {
        operacion = prompt("Ingresar la operación (+, -, *, /, %):");
        if (operacion !== null) {
            operacion = operacion.trim();
            if (["+", "-", "*", "/", "%"].includes(operacion)) {
                return operacion;
            }
        }
        alert("Por favor, ingrese una operación válida (+, -, *, /, %).");
    } while (true);
}

// Solicitar el primer número
let numberA = solicitarNumero("Ingresar el primer número:");

// Solicitar el segundo número
let numberB = solicitarNumero("Ingresar el segundo número:");

// Solicitar la operación
let operacion = solicitarOperacion();

// Realizar la operación usando condicionales
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
        resultado = "Error: No se puede dividir por cero.";
    }
} else if (operacion === "%") {
    if (numberB !== 0) {
        resultado = numberA % numberB;
    } else {
        resultado = "Error: No se puede calcular el módulo con cero.";
    }
} else {
    resultado = "Operación incorrecta";
}

// Mostrar el resultado de la operación
console.log("El resultado de la operación es: " + resultado);
alert("El resultado de la operación es: " + resultado);
