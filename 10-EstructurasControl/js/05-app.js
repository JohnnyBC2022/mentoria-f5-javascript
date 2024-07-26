// Switch-case (Python no tiene, pero se puede simular)

const metodoPago = 'cheque';

switch(metodoPago) {
    case 'efectivo':
        Pagar()
        console.log(`Pagaste con ${metodoPago}`)
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`)
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`)
        break;

    default:
        console.log('No has seleccionado método de pago o método de pago no permitido');
        break;
}

function pagar() {
    console.log('Pagando...')
}


/*
A tener en cuenta:
- El default es obligatorio, los case no
- No olvidarse del break, puede provocar un loop infinito
- Aquí evaluamos múltiples condiciones
- El tiempo de ejecución es distinto al if (en el if evaluará todas las instrucciones hasta encontrar la que se cumpla, en el switch todas "al mismo tiempo")
 */

