

console.log('[ Gestion de informacion de motocicleta: ]')

// Objeto con propiedades básicas
// Añadir un objeto anidado dentro de motocicleta
const motocicleta = {
    marca: "Suzuki",
    modelo: "VSTROM 250 SX",
    año: 2024,
    color: "Gris",

    propietario: {
        nombre: "María Rodríguez",
        edad: 25,
        licencia: "A"
    }
};

// Acceder y mostrar propiedades del objeto
console.log(`Marca: ${motocicleta.marca}`);
console.log(`Modelo: ${motocicleta.modelo}`);
console.log(`Año: ${motocicleta.año}`);
console.log(`Color: ${motocicleta.color}`);

// Mostrar el objeto anidado
console.log(motocicleta.propietario);

// Agregar y eliminar propiedades del objeto
motocicleta.kilometraje = 1500;
console.log(`Kilometraje: ${motocicleta.kilometraje}`);

delete motocicleta.color;
console.log(`Color después de eliminación: ${motocicleta.color}`); // Esto debería dar undefined ya que la propiedad fue eliminada

// Usar la destructuración para acceder a propiedades
const { marca, modelo, año } = motocicleta;
console.log(`Desestructuración - Marca: ${marca}, Modelo: ${modelo}, Año: ${año}`);

// Congelar el objeto para evitar cambios
Object.freeze(motocicleta);
// motocicleta.marca = "Honda"; // Esto no funcionará ya que el objeto está congelado
console.log(`Marca después de congelar: ${motocicleta.marca}`); // Debería seguir siendo "Suzuki"

// Sellar el objeto para permitir modificaciones pero no agregar ni eliminar propiedades //  Usar this dentro de un método del objeto
const motocicleta2 = {
    marca: "Kawasaki",
    modelo: "Ninja ZX-10R",
    año: 2023,
    kilometraje: 10000,
    mostrardato : function() {
        console.log(`Esta motocicleta es una ${this.marca} ${this.modelo} del año ${this.año}.`);
    }
};

Object.seal(motocicleta2);
motocicleta2.marca = "Yamaha";
console.log(motocicleta2);

// Unir dos objetos usando Object.assign y el operador spread
const especificaciones = {
    cilindrada: "250cc",
    tipo: "Aventura"
};

const motocicletaUnida1 = Object.assign({}, motocicleta, especificaciones);
console.log(motocicletaUnida1);

const motocicletaUnida2 = { ...motocicleta2, ...especificaciones };
console.log(motocicletaUnida2);


// mostrarinfo_en la consola visualizar12
motocicleta2.mostrardato();

// Recorrer el objeto usando Object.keys, Object.values y Object.entries
console.log("Keys:", Object.keys(motocicleta2));
console.log("Values:", Object.values(motocicleta2));
console.log("Entries:", Object.entries(motocicleta2));

// Usar funciones con parámetros y con devolución (return)
function actualizarKilometraje(motocicleta, nuevoKilometraje) {
    motocicleta.kilometraje = nuevoKilometraje;
    return motocicleta;
}

console.log(actualizarKilometraje(motocicleta2, 12000));