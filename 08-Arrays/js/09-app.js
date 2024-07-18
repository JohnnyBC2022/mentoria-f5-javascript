// foreach
const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 200},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Auriculares', precio: 50},
    { nombre: 'Teclado', precio: 40},
    { nombre: 'Móvil', precio: 300},
]

// iteramos sobre cada objeto
for(let i=0; i<carrito.length;i++){
    console.log(carrito[i]);
}
// iteramos sobre el nombre
for(let i=0; i<carrito.length;i++){
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

// foreach
carrito.forEach(function (producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})
