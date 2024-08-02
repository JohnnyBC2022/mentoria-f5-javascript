// Event bubbling es cuando se ejecuta un evento, pero ese evento se propaga por más lugares, que no son los deseados

const cardDiv = document.querySelector('.card')
const infoDiv = document.querySelector('.info')
const titulo = document.querySelector('.titulo')

/* cardDiv.addEventListener('click', () => {
    console.log('click en card')
})

infoDiv.addEventListener('click', () => {
    console.log('click en info')
})
titulo.addEventListener('click', () => {
    console.log('click en título')
}) */

// aquí si hacemos click en título, se van a ejecutar los 3 eventos, para evitarlo:

cardDiv.addEventListener('click', e => {
    e.stopPropagation()
    console.log('click en card')
})

infoDiv.addEventListener('click', e => {
    e.stopPropagation()
    console.log('click en info')
})
titulo.addEventListener('click', e => {
    e.stopPropagation()
    console.log('click en título')
})
