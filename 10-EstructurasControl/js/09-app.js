// Operador ternario

const auntentificado = true;

console.log(auntentificado ? 'Si está autentificado': 'no está autentificado');

// Operador ternario con dos condiciones
const puedePagar = true;

console.log(auntentificado && puedePagar ? 'Puede pagar': null);

// If anidado

const efectivo = 800;
const credito = 400;
const disponible = efectivo + credito;
const totalAPagar = 600;

if (efectivo > totalPagar || credito > totalAPagar || disponible > totalAPagar) {
    if ( efectivo > totalAPagar) {
        console.log('Pagado en efectivo')
    } else {
        console.log('Otra forma de pago')
    }
} else {
    console.log('Fondos insuficientes')
}

// ternarios anidados (poco común)

console.log(auntentificado ? puedePagar ? 'Autentificado y puede pagar': 'Autentificado y no puede pagar' : 'No está autentificado y no puede pagar')