const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Si queremos almacenar cada par en una variable (esto se hacía antes así)
/* const nombre = producto.nombre;
console.log(nombre); */

// Desde EcmaScript 6 se utiliza lo que se denomina como object destructuring. Es decir, extraer del objeto una propiedad y crear la variable todo en un solo paso

/* const {nombre} = producto;
const {precio} = producto;
console.log(nombre);
console.log(precio); */

const {nombre, precio, disponible, noExiste} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(noExiste); // ¿qué devuelve?

// Recuerda, destructuring además de extraer el valor, crea la variable
