// Seleccionar elementos por su clase...

const header = document.getElementsByClassName('header');
// const header = document.getElementsByClassName('HEADER');

console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero)

// si las clases existen más de una vez
const contenedores = document.getElementsByClassName('contenedor')

// Si una clase no existe
const noExiste = document.getElementsByClassName('no-existe')
console.log(noExiste);