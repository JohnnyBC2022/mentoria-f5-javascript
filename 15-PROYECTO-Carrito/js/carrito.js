// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaEventos = document.querySelector('#lista-eventos');
let articulosCarrito = [];

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
        deporte: eventoEscogido.querySelector('.titulo').textContent,
        precio: eventoEscogido.querySelector('.precio span').textContent,
        id: eventoEscogido.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Agregar elementos al array de carrito
    articulosCarrito = [...articulosCarrito, infoEvento];

    console.log(articulosCarrito);

    carritoHTML();
}

// Muestra el carrito de compras en el HTML
function carritoHTML() {

    //Limpiar el HTML
    limpiarHTML();
    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach(evento => {
        const {imagen, deporte, precio, cantidad, id} = evento
        const row = document.createElement('TR');
        row.innerHTML = `
        <td>
            <img src="${imagen}" width="60">
        </td>
        <td>
            ${deporte}
        </td>
        <td>
            ${precio}
        </td>
        <td>
            ${cantidad}
        </td>
        <td>
            <a href="#" class="borrar-evento" data-id=${id}>X </a>
        </td>
        `;

        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}

// Eliminar los eventos anteriores del tbody
function limpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = '';
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}