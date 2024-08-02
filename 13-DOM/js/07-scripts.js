// Acceder y cambiar el CSS

const titulo = document.querySelector('h1');

console.log(titulo.style);

// cambia un poco la sintaxis respecto a CSS,  javascript usa camelCase
// Ej. justify-content (CSS) -> justifyContent (JS)

titulo.style.backgroundColor = 'red';
titulo.style.fontFamily = 'Arial';
titulo.style.textTransform = 'uppercase';

// aunque se puede hacer esto, se pueden agregar o quitar clases

const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase'); //añade una nueva clase
card.classList.remove('card');
console.log(card.classList);
