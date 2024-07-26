// If-elseif-else
const dinero = 1000;
const totalAPagar = 500;
const tarjeta = true;
const chequeRegalo = true;

if(dinero >= totalAPagar) {
    console.log('Si podemos comprar el producto');
} else if(tarjeta) {
    console.log('Si puedo pagar porque tengo la tarjeta');
} else if(cheque)  {
    console.log('Tengo un cheque regalo')
} else {
    console.log('Fondos insuficientes');
}

// Hay que tener en cuenta que en los if, solo ejecuta la primera condición que encuentre (aunque se cumplan mas). Importante!!!!