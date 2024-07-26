// Operador "OR"

const efectivo = 300;
const credito = 100;
const disponible = efectivo + credito;
const totalAPagar = 600;

if (efectivo > totalPagar || credito > totalAPagar || disponible > totalAPagar) {
    console.log('Si podemos pagar')
} else {
    console.log('Fondos insuficientes')
}

// Si se cumple una sola condición se ejecutará el código