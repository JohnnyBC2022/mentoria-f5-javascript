// Eventos de ratón

const nav = document.querySelector('.navegacion');

//registrar un evento
nav.addEventListener('click', ()=>{
    console.log('Click en el nav')
})

// Mouse enter
nav.addEventListener('mouseenter', ()=>{
    console.log('pasando el ratón por el nav')
    nav.style.backgroundColor = "lightseagreen"
})

// Mouse out
nav.addEventListener('mouseout', ()=>{
    console.log('quitando el ratón de el nav')
    nav.style.backgroundColor = "transparent"
})

// hay otros eventos de ratón como mousedown - similar al click
// dblclick - doble click
// y más, es cuestión de experimentar con ellos para conseguir el efecto deseado.

