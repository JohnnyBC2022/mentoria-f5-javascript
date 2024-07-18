// Eliminar elementos a un array

const carrito = [];
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

const producto4 = {
    nombre: 'Ratón',
    precio: 10
}

carrito.push(producto3);
carrito.push(producto4);

// Eliminar último elemento de un array

carrito.pop();
console.table(carrito);

// Eliminar del inicio de un array
carrito.shift();
console.table(carrito);

// Eliminar elementos en el medio del array
// El primer parámetro indica el índice a partir del elemento que queremos eliminar
// El segundo parámetro indica el número de elementos a eliminar
carrito.splice(1, 1);
console.table(carrito);

// Estos métodos son imperativos, veremos los declarativos en los métodos de arrays