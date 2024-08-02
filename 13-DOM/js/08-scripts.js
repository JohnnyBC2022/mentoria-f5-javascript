// Traversing the DOM (recorrer el DOM) de padres a hijos


const navegacion = document.querySelector('.navegacion');
console.log(navegacion)
console.log(navegacion.childNodes) // Los espacios en blanco del código HTML son considerados elementos, es decir los saltos de línea
console.log(navegacion.children) // nos devuelve los elementos hijo de ese elemento sin tener en cuenta los espacios en blanco del HTML.

console.log(navegacion.children[1].nodeName)
console.log(navegacion.children[1].nodeType)

const card = document.querySelector('.card')
console.log(card.children[1].children[1].textContent)

card.children[1].children[1].textContent = 'Nuevo texto desde traversing the DOM'

card.children[0].src = 'img/sport5.jpg'

// Traversing the dom de hijos a padres
console.log(card.parentNode); //tiene en cuenta los espacios en blanco
console.log(card.parentElement.parentElement); //no tiene en cuenta los espacios en blanco

// Traversing the dom entre elementos hermanos

console.log(card)
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4');
console.log(ultimoCard.previousElementSibling)

// Otras formas
console.log(navegacion.firstElementChild)
console.log(navegacion.lastElementChild)