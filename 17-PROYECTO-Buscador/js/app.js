//Variables

const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const max = new Date().getFullYear(); // Devuelve el año actual
const min = max - 20; // resta 20 al año actual

//Generar un objeto con la búsqueda
let datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarVehiculos(vehiculos);

    // Rellenar el input con las opciones de años
    llenarSelect();
})

// Eventos para los selectores de búsqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarVehiculos();
});
year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarVehiculos();
});
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarVehiculos();
});
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarVehiculos();
});
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
});
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
});
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
});

// Funciones
function mostrarVehiculos(vehiculos) {
    limpiarHTML(); //Elimina el HTML ya existente

    vehiculos.forEach(vehiculo => {
        const { marca, modelo, year, puertas, transmision, precio, color } = vehiculo;

        const vehiculoHTML = document.createElement('P');

        vehiculoHTML.textContent = `
        ${marca} ${modelo} - Año: ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} € - Color: ${color}
        `;

        // Insertar en el HTML
        resultado.appendChild(vehiculoHTML);
    })
};

// Limpiar HTML
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

// Generar los últimos 20 años en el campo año
function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('OPTION');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion)
    }
}

//Función que filtra en base a la búsqueda
function filtrarVehiculos() {
    const resultado = vehiculos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo);

    mostrarVehiculos(resultado);
}

function filtrarMarca(vehiculo) {
    const { marca } = datosBusqueda;
    if (marca) {
        return vehiculo.marca === marca;
    }
    return vehiculo;
}

function filtrarYear(vehiculo) {
    const { year } = datosBusqueda;
    if (year) {
        return vehiculo.year === year;
    }
    return vehiculo;
}

function filtrarMinimo(vehiculo) {
    const { minimo } = datosBusqueda;
    if (minimo) {
        return vehiculo.precio >= minimo;
    }
    return vehiculo;
}

function filtrarMaximo(vehiculo) {
    const { maximo } = datosBusqueda;
    if (maximo) {
        return vehiculo.precio <= maximo;
    }
    return vehiculo;
}
