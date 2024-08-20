# Objetivo del proyecto

Este proyecto tiene como objetivo crear una funcionalidad de búsqueda avanzada utilizando múltiples campos de selección en un formulario HTML. Aplicaremos conceptos de manipulación del DOM, manejo de eventos, y funciones de filtrado de datos para crear una interfaz de búsqueda interactiva y eficiente.

## Desarrollo del proyecto

La explicación será paso a paso, se puede seguir la evolución de todas las partes siguiendo el historial de **_commits_**.

## Primer paso: visualización de todos los resultados de la BBDD.

Este es el código necesario para poder visualizar en el HTML todos los vehículos incluidos en la BBDD:

```javascript
//Variables
const resultado = document.querySelector("#resultado");

// Eventos
document.addEventListener("DOMContentLoaded", () => {
  mostrarVehiculos();
});

// Funciones
function mostrarVehiculos() {
  vehiculos.forEach((vehiculo) => {
    const { marca, modelo, year, puertas, transmision, precio, color } =
      vehiculo;

    const vehiculoHTML = document.createElement("P");

    vehiculoHTML.textContent = `
         ${marca} ${modelo} - Año: ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} € - Color: ${color}
        `;

    // Insertar en el HTML
    resultado.appendChild(vehiculoHTML);
  });
}
```


