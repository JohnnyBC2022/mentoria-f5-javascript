// Variables
const formulario = document.querySelector('#formulario');
const listaPosts = document.querySelector('#lista-posts');
let posts = [];

eventListeners()
// Event Listeners
function eventListeners() {
    formulario.addEventListener('submit', nuevoPost);
}

//Funciones
function nuevoPost(e) {
    e.preventDefault();
    console.log('agregando...');
}