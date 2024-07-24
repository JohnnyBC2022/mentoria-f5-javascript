// Comunicación entre funciones

iniciarApp();

function iniciarApp() {
    console.log('Iniciciando app..')

    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda función')

    usuarioAutentificado('Pablo');
}

function usuarioAutentificado(usuario) {
    console.log('Autentificando usuario...')
    console.log(`Usuario autentificado correctamente: ${usuario}`)
}

// Tendremos una función que inicia todo el código y después se pueden ir llamando unas a otras de forma secuencial