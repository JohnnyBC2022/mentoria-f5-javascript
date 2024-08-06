// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaEventos = document.querySelector('#lista-eventos');

// Registro de event Listeners
cargarEventListeners();
function cargarEventListeners() {
    // Evento que se dispara cuando se añade un evento deportivo al hacer click en "Agregar al carrito"
    listaEventos.addEventListener('click', agregarEvento)
}

// Funciones
function agregarEvento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        console.log('Agregando al carrito')
    }
}

