// Comparador distinto

const puntuacion = 1000;
const puntuacion2= "1000";

console.log(typeof puntuacion)
console.log(typeof puntuacion2)

/* if (puntuacion != 1000) {
    console.log('Si, es diferente...')
} */

// Comparador estricto

if (puntuacion === "1000") {
    console.log('Si, es igual...')
} else {
    console.log('no es igual')
}

// "==": Operador no estricto (compara valor)
// "===": Operador estricto (compara valor y tipo de valor)
// "!=": distinto no estricto
// "!==": distinto estricto
