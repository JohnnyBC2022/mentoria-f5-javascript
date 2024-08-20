//Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear(); // Devuelve el año actual
const min = max - 20; // resta 20 al año actual

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarVehiculos();

    // Rellenar el input con las opciones de años
    llenarSelect();
})

// Funciones
function mostrarVehiculos() {
    vehiculos.forEach(vehiculo => {
        const { marca, modelo, year, puertas, transmision, precio, color } = vehiculo;

        const vehiculoHTML = document.createElement('P');

        vehiculoHTML.textContent = `
         ${marca} ${modelo} - Año: ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} € - Color: ${color}
        `;

        // Insertar en el HTML
        resultado.appendChild(vehiculoHTML)
    })
};

// Generar los últimos 20 años en el campo año
function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('OPTION');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion)
    }
}

