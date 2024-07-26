// for...of: El bucle for...of se utiliza para iterar sobre los elementos de un array (o cualquier objeto iterable). Es más sencillo y legible cuando no necesitas el índice, es decir, cuando solo nos interesan los valores.

// En cada iteración del bucle, la variable toma el valor de uno de los elementos del array. Aquí hace una iteración solo sobre los valores. En el for, lo hace sobre cada elemento.

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript'];

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 200 },
    { nombre: 'Tablet', precio: 300, descuento: true },
    { nombre: 'Auriculares', precio: 50 },
    { nombre: 'Teclado', precio: 40 },
    { nombre: 'Móvil', precio: 300 },
]

for( let pendiente of pendientes) {
    console.log(pendiente)
}

for(let producto of carrito) {
    console.log(producto.nombre)
}

// En EcmaScript 7 se añadió esta sintaxis
for(let [clave, valor] of Object.entries(automovil)){
    console.log(clave);
    console.log(valor);
}