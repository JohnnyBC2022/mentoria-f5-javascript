// Eventos de ratón

const nav = document.querySelector('.navegacion')

const titulo = document.querySelector('h1')



console.log(nav)

let contador = 0


titulo.addEventListener('click', () => {
    console.log('Click en el nav')
    contador++;
    titulo.textContent = contador;
    console.log(contador)
})


nav.addEventListener('mouseenter', () => {
    console.log('pasando el raton por el nav')
    nav.style.backgroundColor = 'yellow'
})

 nav.addEventListener('mouseout', () => {
    console.log('quitando el raton de el nav')
    nav.style.backgroundColor = 'transparent'
})

