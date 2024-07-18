// Añadir elementos a un array

const carrito = [];

carrito[0] = 'Monitor';

// Definir un producto
const producto = {
    nombre: 'Monitor de 32"',
    precio: 200
}

const producto2 = {
    nombre: 'Teléfono Móvil',
    precio: 300
}

// Agregar al final del array
carrito.push(producto);
carrito.push(producto2);

console.table(carrito);

const producto3 = {
    nombre: 'Teclado',
    precio: 40
}


// Agregar al principio del array
carrito.unshift(producto3);

console.table(carrito);


// Estos métodos son imperativos. Es decir, modifican directamente el array original (push, unshift, pop, shift, splice)



