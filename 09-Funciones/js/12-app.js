// foreach
const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 200},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Auriculares', precio: 50},
    { nombre: 'Teclado', precio: 40},
    { nombre: 'Móvil', precio: 300},
]


const nuevoArray = carrito.forEach( (producto) => 
    `${producto.nombre} - Precio: ${producto.precio}`);


carrito.map( (producto) => {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})

console.log(nuevoArray);


