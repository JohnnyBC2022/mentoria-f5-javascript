// Buenas prácticas

const autentificado = true;

/* if(autentificado === true) {
    console.log('El usuario está autentificado')
} => Nooooo */


if(autentificado) {
    console.log('El usuario está autentificado')
}

const puntuacion = 500;

/* if(puntuacion > 300) {
    console.log('Buena puntuación')
} else if (puntuacion > 400) {
    console.log('Excelente!!!!')
} => noo*/


if(puntuacion > 400) {
    console.log('Excelente!!!!')
} else if (puntuacion > 300) {
    console.log('Buena puntuación')
}



/* function comprobarPuntuacion() {
    if(puntuacion > 400) {
        console.log('Excelente!!!!')
    }
    if(puntuacion > 300) {
        console.log('Buena puntuación')
    }
} => no*/


function comprobarPuntuacion() {
    if(puntuacion > 400) {
        console.log('Excelente!!!!')
        return;
    }
    if(puntuacion > 300) {
        console.log('Buena puntuación')
        return;
    }
}

comprobarPuntuacion();