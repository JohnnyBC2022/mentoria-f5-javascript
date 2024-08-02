// Al igual que getElementById, selecciona el primero que encuentra
// Este selector es más nuevo y su sintaxis varía ligeramente
// hay que tener en cuenta que con querySelector nos devuelve el primer elemento que encuentra
const card = document.querySelector('.card');
console.log(card)

// Podemos tener selectores específicos como en CSS

const info = document.querySelector('.card .info') // al igual que en CSS si ponemos las clases juntas, nos estamos refiriendo a un mismo elemento, pero al usar el espacio, llamamos al padre e hijo
console.log(info);

// Seleccionar el segundo card de momentos destacados
const segundoCard = document.querySelector('section.highlights .card:nth-child(2)')
console.log(segundoCard)

// También podemos seleccionar id con la misma sintaxis
const formulario = document.querySelector('#formulario')
console.log(formulario)

// se pueden mezclar id y clases, e incluso etiquetas HTML

const navegacion = document.querySelector('.hero form #btn-submit');
console.log(navegacion);

