// Acceder y cambiar el html
const titulo = document.querySelector('.contenido-hero h1')

// En firefox developer edition, podemos ver todas las propiedades a las que podemos acceder
console.log(titulo)
// 3 formas de acceder al texto
console.log(titulo.innerText) // si en el CSS tenemos visibility: hidden, no lo va a encontrar
console.log(titulo.textContent) // si lo va encontrar
console.log(titulo.innerHTML) // se trae el HTML

const titulo2 = document.querySelector('.contenido-hero h1')

const nuevoTitulo = 'accediendo al título desde js'

titulo2.textContent = nuevoTitulo;

console.log(titulo2)

const imagen = document.querySelector('.card img')
console.log(imagen)

imagen.src = 'img/sport2.jpg'
imagen.alt = 'Otra imagen'
console.log(imagen)

