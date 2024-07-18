// Agregar elementos al principio o final usando el spread operator

// Añadir elementos a un array

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

const producto3 = {
    nombre: 'Teclado',
    precio: 40
}

let resultado;

resultado = [...carrito, producto];

resultado = [...resultado, producto2];

resultado = [producto3, ...resultado];

console.table(carrito)
console.table(resultado);


// Métodos declarativos. Devuelven un nuevo array con los cambios, dejando el array original sin modificar (map, filter, concat, slice)


