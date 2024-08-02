// Eventos de teclado

const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', () =>{
    console.log('Escribiendo...')
})
// se ejecuta el evento al pulsar una tecla

busqueda.addEventListener('keyup', () =>{
    console.log('Escribiendo...')
})
// se ejecuta al evento al dejar de pulsar una tecla

// también podemos manejar eventos cuando un usuario copia con "CTRL"+C, pega, corta

// Hay eventos para manejar un input

busqueda.addEventListener('input', (evento) =>{
    console.log(evento)
})

busqueda.addEventListener('input', (e) =>{
    console.log(e.type)
})

busqueda.addEventListener('input', (e) =>{
    console.log(e.target.value)
})

busqueda.addEventListener('blur', (evento) =>{
    console.log(evento)
})

// La diferencia entre input y blur es que el evento input se dispara cuando el valor de una etiqueta input ha cambiado y blur cuando se pierde el foco en la etiqueta input. Existen más eventos para manejar etiquetas de tipo input.

// por ejemplo podemos validar de una forma muy sencilla si un input tiene información
busqueda.addEventListener('input', (e) =>{
    if(e.target.value === ''){
        console.log('falló la validación')
    }
})

