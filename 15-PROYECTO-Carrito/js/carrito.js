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
        const eventoSeleccionado = e.target.parentElement.parentElement;
        leerDatosEvento(eventoSeleccionado);
    }
}

// Lee el contenido del HTML al que le dimos click y extrae la información del evento

function leerDatosEvento(eventoEscogido) {

    // Crear un objeto con el contenido del evento actual
    const infoEvento = {
        imagen: eventoEscogido.querySelector('img').src,
        deporte: eventoEscogido.querySelector('.categoria').textContent,
        precio: eventoEscogido.querySelector('.precio span').textContent,
        id: eventoEscogido.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    console.log(infoEvento);
}
