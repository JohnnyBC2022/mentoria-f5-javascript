// Bucle for: recorre todos los elementos mientras se cumpla una condición.

// Se utiliza cuando se conoce de antemano el número de veces que se desea repetir un bloque de código.

// La inicialización, condición, y actualización están en una sola línea.

// for(inicializador; condición; incremento) { instrucciones a ejecutar}
/*
for (let i = 0; i < 10; i++) {
    console.log(`Numero: ${i}`)
} */

/* for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`El número ${i} es PAR`)
    } else {
        console.log(`El número ${i} es IMPAR`)
    }
} */

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 200 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Auriculares', precio: 50 },
    { nombre: 'Teclado', precio: 40 },
    { nombre: 'Móvil', precio: 300 }
]

console.log(carrito,l);
// carrito.length = 6 (cantidad de elementos)

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

// for (inicializador; condición ; incremento)
//Primer paso
// i=0 ; 0 < 6 ; incremento i= 0 -> i=1{
// muestra el nombre del producto en la posición 0 del carrito}

// Segundo paso
// i=1; 1 < 6 ; i=2 ;{muestra el nombre del producto en la posicion 1 del carrito}

// Tercer paso
// i=2 ; 2 < 6 ; i=3;  {muestra el nombre del producto en la posicion 2 del carrito}

///...
// Ultimo paso
// i=5; 5< 6; i=6 {muestra el nombre del producto en la posicion 5 del carrito}

// i=6; 6<6 => falso, no se cumple y como no se cumple termina el ciclo

