// Break: termina el bucle inmediatamente.  Se usa cuando quieres salir completamente del bucle en el momento en que se cumple una condición.

// Continue: Salta a la siguiente iteración del bucle, omitiendo el código restante en la iteración actual.. Se usa cuando quieres omitir la iteración actual y continuar con la siguiente.

for (let i = 0; i <= 10; i++) {
    if(i === 5) {
        console.log('Este es el número 5');
        break;
    }
    console.log(`Número: ${i}`)
}

// Aquí, cuando i es igual a 5, el mensaje se imprime y el bucle se detiene completamente


for (let i = 0; i <= 10; i++) {
    if(i === 5) {
        console.log('Este es el número 5');
        continue;
    }
    console.log(`Número: ${i}`)
}

// Aquí, cuando i es igual a 5, el mensaje se imprime y luego se salta el resto de la iteración actual, continuando con i igual a 6.

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 200 },
    { nombre: 'Tablet', precio: 300, descuento: true },
    { nombre: 'Auriculares', precio: 50 },
    { nombre: 'Teclado', precio: 40 },
    { nombre: 'Móvil', precio: 300 },
]

for(let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log('El artículo ${carrito[i].nombre} tiene descuento');
        continue;
    }
    console.log(carrito[i].nombre)
}