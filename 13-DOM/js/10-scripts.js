// Generar HTML desde Javascript

//creamos el enlace
const nuevoEnlace = document.createElement('a');

// le agregamos el texto
nuevoEnlace.textContent = 'Nuevo Enlace';

//añadimos los atributos
nuevoEnlace.href = '/nuevo-enlace';
nuevoEnlace.target = '_blank' //abre el enlace en una página nueva

// si quisieramos, podemos añadir otros atributos, clases, ...
nuevoEnlace.setAttribute('data-element', 'nuevo-enlace')
nuevoEnlace.classList.add('mi-clase')

nuevoEnlace.onclick = miFuncion()

function miFuncion(){
    alert('Hiciste click')
}

console.log(nuevoEnlace)

// Para añadir el elemento creado en la parte del DOM que queramos:
const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace) // lo coloca al final
console.log(navegacion.children)
navegacion.insertBefore(nuevoEnlace, navegacion.children[1]) //podemos controlar donde lo añadimos


// Crear un card de forma dinámica

const parrafo1 = document.createElement('P')
parrafo1.textContent = 'Baloncesto Masculino';
parrafo1.classList.add('categoria', 'basketball')

const parrafo2 = document.createElement('P')
parrafo2.textContent = 'Final de baloncesto';
parrafo2.classList.add('titulo')


// Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)


// Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/sport6.jpg'
imagen.alt = 'Texto alternativo'

// Crear el card
const card = document.createElement('div');
card.classList.add('card');

// Asignar la imagen
card.appendChild(imagen)

//Asignar info
card.appendChild(info);

console.log(card)

// Insertar en el HTML
const contenedor = document.querySelector('.sports .contenedor-cards');
contenedor.appendChild(card)
contenedor.insertBefore(card, contenedor.children[0])