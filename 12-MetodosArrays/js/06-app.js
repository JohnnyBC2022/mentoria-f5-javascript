const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const resultado = carrito.every(producto => producto.precio < 1000);
console.log(resultado)

// en un .every todos los elementos deben cumplir una condición para que devuelva un true (como si fuera un and)

const resultado2 = carrito.some(producto => producto.precio < 500);
console.log(resultado2)
// er un .some con que un elemento cumpla la condición devolverá true (como si fuera un or)