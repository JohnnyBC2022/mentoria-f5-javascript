"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}
// seal no permite añadir ni eliminar propiedades, pero a diferencia de freeze si permite modificar las existentes
Object.seal(producto);
producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);
console.log(Object.isSealed(producto));
