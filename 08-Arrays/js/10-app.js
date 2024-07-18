
const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 200},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Auriculares', precio: 50},
    { nombre: 'Teclado', precio: 40},
    { nombre: 'Móvil', precio: 300},
]

// foreach
const nuevoArray = carrito.forEach(function (producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

// map (se utiliza más)
// la diferencia es que map crea un array nuevo
const nuevoArray2 = carrito.map(function (producto) {
    return`${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoArray);
console.log(nuevoArray2);

