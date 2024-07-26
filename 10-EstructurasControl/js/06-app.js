// Operador "and" y distinto de 

const usuario = true;
const puedePagar = true;

if(usuario && puedePagar) {
    console.log('Puedes comprar, usuario')
} else if(!usuario && !puedePagar) {
    console.log('No puedes comprar')
} else if(!usuario){
    console.log('Inicia sesión o regístrate')
} else if(!puedePagar) {
    console.log('Fondos insuficientes')
}

// Deben cumplirse todas las condiciones