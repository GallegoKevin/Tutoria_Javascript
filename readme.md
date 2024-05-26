## JAVASCRIPT

![Imagen](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYmpKizkiZ4vR50ndoXJZnBi2l2O7yj2NGw-YdjX2Jfg&s)

## `Calculadora basica:` 

1. `Entrada de datos:` Se utiliza prompt para solicitar al usuario que ingrese dos números (numberA y numberB) y la operación (operacion) que desea realizar.

2. `Parseo de números:` Se utiliza parseFloat para convertir las cadenas ingresadas por el usuario en números de punto flotante.

3. `Selección de operación:` Se utiliza una serie de declaraciones if y else if para determinar qué operación realizar en función de la entrada del usuario (operacion). Las operaciones incluyen suma, resta, multiplicación, división, módulo y manejo de errores para la división por cero.

4. `Cálculo del resultado:` Se realiza la operación matemática correspondiente según la opción seleccionada por el usuario.

5. `Mostrar resultado:` Se utiliza alert para mostrar el resultado de la operación en una ventana emergente al usuario.


## `Gestión de Información de una motocicleta:` 

1. `Objetos y Propiedades:` Se define un objeto motocicleta con propiedades como marca, modelo, año, y color. También se incluye un objeto anidado propietario dentro de motocicleta con sus propias propiedades.

2. `Acceso a Propiedades:` Se accede y muestra el valor de las propiedades del objeto motocicleta utilizando la notación de punto (objeto.propiedad).

3. `Agregar y Eliminar Propiedades:` Se agrega una nueva propiedad kilometraje al objeto motocicleta y se elimina la propiedad color utilizando delete.

4. `Destructuración:` Se utiliza la destructuración para acceder directamente a las propiedades del objeto sin necesidad de usar la notación de punto.

5. `Congelar y Sellar Objetos:` Se congela el objeto motocicleta para evitar cambios y se sella el objeto motocicleta2 para permitir modificaciones pero no agregar ni eliminar propiedades.

6. `Métodos de Objetos:` Se define un método mostrardato dentro del objeto motocicleta2 que utiliza this para acceder a las propiedades del objeto.

7. `Unión de Objetos:` Se unen dos objetos utilizando Object.assign y el operador spread (...).

8. `Recorrido de Objetos:` Se utiliza Object.keys, Object.values, y Object.entries para recorrer las propiedades de un objeto.

9. `Funciones con Parámetros y Devolución:` Se define y utiliza una función actualizarKilometraje que toma parámetros y devuelve un objeto modificado.




## RESULTADO FINAL EN CONSOLA:

![RESULTADO](https://i.ibb.co/chqm1yh/tutoria-javascript.gif)



# Iteradores (Bucles) 

Los iteradores o bucles; nos permite repetir un bloque de código varias veces hasta que se cumpla una condición específicada. 


1. **`while`**: Se usa para repetir un bloque de codigos mientras se cumplan las condiciones especificadas sea verdadera. Su sintaxis suele ser: 
while (condición) {
    // Bloque de código a ejecutar mientras la condición sea verdadera
}


2. **`for`**: Se usa para repetir un bloque de codigos un numero especifico de veces. Su sintaxis suele ser: 

for (inicialización; condición; expresión de iteración) {
    // Bloque de código a repetir
}

# Métodos de Arrays usados en los Ejercicios:

1. **`forEach`**: Se usa para Iterar en cada elemento de un array y ejecutar un función especificada para cada elemento. 
2. **`map`**: Crea un nuevo array con los resultados dados al aplicar una función especificada a cada elemento del array original.
3. **`find`**: Encuentra el primer array en cumplir con la condición especificada.
4. **`some`**: Verifica si al menos un elemento del array cumple con las condiciones especificadas.
5. **`filter`**: Crea un nuevo array con los elementos del array original que cumplan las condiciones especificadas
6. **`Combinación de filter y map`**: Filtra los elementos del array segun las condiciones que especifiquemos y luego a cada elemento del array se le aplica una funcion especificada y por ultimo con esos resultados se crea un nuevo array. 


![Imagen 2](https://i.ibb.co/b2VzHVH/Iteradores-y-metodo-array-2.png)