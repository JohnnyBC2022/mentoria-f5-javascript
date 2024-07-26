// forEach: ideal para recorrer arrays

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript'];

pendientes.forEach((elementoDePendientes) => {
    console.log(elementoDePendientes)
})

pendientes.forEach((elementoDePendientes, indice) => { `${indice}: ${elementoDePendientes} ` })

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 200 },
    { nombre: 'Tablet', precio: 300, descuento: true },
    { nombre: 'Auriculares', precio: 50 },
    { nombre: 'Teclado', precio: 40 },
    { nombre: 'Móvil', precio: 300 },
]

const nuevoArray = carrito.forEach(producto => producto.nombre)

const nuevoArray2 = carrito.map(producto => producto.nombre)

console.log(nuevoArray); // El valor de nuevoArray es undefined porque forEach no devuelve nada.
console.log(nuevoArray2); // El valor de nuevoArray2 es ['Producto 1', 'Producto 2', 'Producto 3', ...]

// forEach: Ejecuta una función para cada elemento del array, pero no devuelve un nuevo array.

// Se usa para realizar operaciones sobre cada elemento del array, como actualizaciones o efectos secundarios, pero no para transformar el array y obtener uno nuevo.

// Map: Ejecuta una función para cada elemento del array y devuelve un nuevo array con los resultados de esa función.

// Se usa cuando deseas transformar los elementos de un array y obtener un nuevo array con los resultados de la transformación.