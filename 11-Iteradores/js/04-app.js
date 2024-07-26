// While: Se ejecuta mientras una condición sea verdadera

// Se utiliza cuando no sabes de antemano cuántas veces se debe repetir el bloque de código, y la condición puede depender de algo que ocurra dentro del bucle.

// Solo incluye la condición. La inicialización y la actualización se hacen por separado.

let i = 0; // inicialización
while (i<10) { // condición
    console.log(`Número ${i}`)
    i++; //incremento
}


let j = 1;
while (j<=100){
    if (j % 15 === 0){
        console.log(`${j} fizz buzz!!!`)
    } else if (j % 3 === 0){
        console.log(`${j} fizz`)
    } else if (j % 5 === 0) {
        console.log(`${j} buzz`)
    } else {
        console.log(`${j}`)
    }

    j++;
}