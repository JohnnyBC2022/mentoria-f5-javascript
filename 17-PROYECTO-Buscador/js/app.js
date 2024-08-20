//Variables
const resultado = document.querySelector('#resultado')

// Eventos
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarVehiculos();
})

// Funciones
function mostrarVehiculos() {
    vehiculos.forEach(vehiculo =>{
        const {marca, modelo, year, puertas, transmision, precio, color} = vehiculo;

        const vehiculoHTML = document.createElement('P');

        vehiculoHTML.textContent = `
         ${marca} ${modelo} - Año: ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} € - Color: ${color}
        `;

        // Insertar en el HTML
        resultado.appendChild(vehiculoHTML)
    })
};