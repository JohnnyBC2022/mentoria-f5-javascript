"use strict";
/* El Modo Estricto es una forma de optar por una variante restringida de JavaScript que ayuda a escribir código más seguro y robusto al introducir varios cambios en la forma en que se evalúa y ejecuta el código .
Al habilitar el método estricto modificamos el comportamiento de javascript, por ejemplo accedemos a otro tipo de métodos para objetos*/

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

/*
producto.disponible = false;
producto.imagen = "imagen.jpg"

x=20;
console.log(x)
console.log(producto); */

// Objects methods
Object.freeze( producto)

/* se utiliza para congelar un objeto, lo que significa que no se pueden añadir, modificar o eliminar propiedades del objeto. Un objeto congelado es inmutable y no se puede cambiar de ninguna manera. Ayuda a la detección de errores y aumenta la seguridad */

producto.disponible = false;
producto.imagen = "imagen.jpg";
delete producto.precio;

console.log(producto);

console.log(Object.isFrozen(producto))