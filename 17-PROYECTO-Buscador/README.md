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

## Segundo paso: crear un select dinámico que muestre los últimos 20 años.

Queremos que se generen de forma dinámica los últimos 20 años en el campo año y aparezca cada uno de los años como opción de selección para el usuario. Para ello, declararemos 3 variables, una con el selector y otras dos con el rango de años que queremos, apoyado en una de las funciones para manejar fechas que veremos próximamente:

```javascript
const year = document.querySelector("#year");
const max = new Date().getFullYear(); // Devuelve el año actual
const min = max - 20; // resta 20 al año actual
```

Actualizamos el evento para que se carguen las opciones al inicio:

```javascript
// Eventos
document.addEventListener("DOMContentLoaded", () => {
  mostrarVehiculos();

  // Rellenar el input con las opciones de años
  llenarSelect();
});
```

Creamos la función **_llenarSelect()_**:

```javascript
function llenarSelect() {
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement("OPTION");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion);
  }
}
```
