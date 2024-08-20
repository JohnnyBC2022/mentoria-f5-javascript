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

## Tercer paso: Leer el valor de los campos seleccionados por el usuario:

Vamos a generar un objeto que contenga los datos de los campos que haya seleccionado el usuario y que inicialmente estará vacío:

```javascript
const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};
```

y vamos a crear un evento de escucha para cada uno de los valores seleccionados:

```javascript
marca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;
});
year.addEventListener("change", (e) => {
  datosBusqueda.year = e.target.value;
});
minimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;
});
maximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;
});
puertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = e.target.value;
});
transmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;
});
color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;
});
```

## Cuarto paso: filtrado por marca

Dentro del evento de marca, una vez leído el valor, vamos a llamar a una función que nos va a filtrar los vehículos:

```javascript
marca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;
  filtrarVehiculo();
});
```

Vamos a crear esta función filtrado de vehículos que va a llamar a otra función que se encargará de filtrar por marca.

```javascript
function filtrarVehiculos() {
  const resultado = vehiculos.filter(filtrarMarca);
  console.log(resultado);
}

function filtrarMarca(vehiculo) {
  const { marca } = datosBusqueda;
  if (marca) {
    return vehiculo.marca === marca;
  }
  return vehiculo;
}
```

Filtrar vehículos va a hacer distintos filtrados que por el momento solo ejecuta el filtrado por marca, si la marca del vehículo coincide con la marca que el usuario ha seleccionado en los datos de búsqueda, es decir, si está presente en ese objeto, entonces la función retornará ese valor.

## Quinto paso: filtrado por año

Gracias al encadenamiento, podemos añadir a la función filtrarVehículos el filtrado por año:

```javascript
function filtrarVehiculos() {
  const resultado = vehiculos.filter(filtrarMarca).filter(filtrarYear);

  console.log(resultado);
}
```

En este punto observamos, que resultado va a hacer un primer filtro llamando a la función **_filtrarMarca_** y sobre este resultado llamar a la función **_filtrarYear_** y para comprobarlo, mostramos el resultado por la consola.

A continuación, crearemos la función **_filtrarYear_** que es idéntica a la anterior:

```javascript
function filtrarYear(vehiculo) {
  const { year } = datosBusqueda;
  if (year) {
    return vehiculo.year === year;
  }
  return vehiculo;
}
```

Hay que tener en cuenta que este filtrado nos va a devolver un array vacío y es porque el dato **_vehiculo.year_** en nuestra base de datos, está almacenado en forma de **_número_**, pero el valor que leemos cuando el usuario selecciona este campo es de tipo **_string_**, por lo tanto nunca va a encontrar las coincidencias (recuerda el operador estricto ===). Para solucionarlo, podemos convertir el valor del dato introducido en un número entero y así ya funcionará este filtrado. Podemos hacerlo en la función filtrarYear o en el evento de escucha de ese valor. Yo lo he hecho ahí:

```javascript
year.addEventListener("change", (e) => {
  datosBusqueda.year = parseInt(e.target.value);
  filtrarVehiculos();
});
```

## Sexto paso: mostrar los resultados del filtrado en el HTML.

Como queremos que se muestre el listado de vehículos siempre y que se actualize la lista cada vez que seleccionamos un campo, debemos pasar como parámetro vehículos en la función que muestra los vehículos:

```javascript
function mostrarVehiculos(vehiculos)
```

y en el evento de carga, se debe pasar como argumento cuando llamamos a la función:

```javascript
mostrarVehiculos(vehiculos);
```

De esta forma, se mostrarán siempre la lista de vehículos. Cuando cargamos la aplicación por primera vez se cargará el listado con todos los vehículos y cuando seleccionemos algún campo se mostrará el listado de vehículos ya filtrado.

Ahora mismo parece que no funciona, pero si nos fijamos en los resultados y hacemos una búsqueda, vemos que se muestra el resultado de la búsqueda a continación del listado sin filtrar. Esto es por el comportamiento de **_appendChild_**. Para que esto no ocurra, si recordamos de los proyectos anteriores, en la función mostrar vehículos, antes de recorrer el objeto para que nos pinte cada par clave-valor debemos limpiar el HTML previo:

```javascript
function mostrarVehiculos(vehiculos) {
    limpiarHTML(); //Elimina el HTML ya existente
```

Y crearemos la función para limpiar el HTML, tal y como ya hemos visto:

```javascript
function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}
```

Ahora, ya vemos como el HTML se actualiza de forma dinámica cada vez que modificamos un campo.

## Séptimo paso: Filtrar por precio

En este punto vamos a hacer un filtrado por precio mínimo y máximo. Al igual que en filtrar marca y año, aprovechando el encadenamiento, añadimos más métodos **_filter_** a la función **_filtrarAuto()_**:

```javascript
function filtrarVehiculos() {
  const resultado = vehiculos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo);

  mostrarVehiculos(resultado);
}
```

Llamamos a la función en su evento correspondiente:

```javascript
minimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;
  filtrarVehiculos();
});
maximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;
  filtrarVehiculos();
});
```

Creamos las funciones filtrarMinimo y filtrarMáximo:

```javascript
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
```

Aquí debemos fijarnos en que al contrario que en filtrar Marca y Año, no estamos comparando con su misma propiedad. En el caso de mínimo queremos que nos filtre los vehículos cuyo precio sea superior a la cantidad mínima introducida por el usuario y en el caso de máximo queremos filtrar por aquellos vehículos cuyo precio sea inferior a la cantidad máxima introducida por el usuario. Es decir, estamos comparando precio con valores mínimos y máximos.

Hay que tener en cuenta que en este caso no es necesario la conversión del tipo de dato por el comportamiento de los **_operadores mayor o igual (>=) y menor o igual (<=)_**.

## Octavo paso: resto de filtros.

Este paso no tiene ningún misterio, ya que es hacer exactamente lo mismo que hemos hecho en el filtrado por marca para el tipo de transmisión y el color y año en el caso de las puertas.

Encadenamos los filtros que restan:

```javascript
function filtrarVehiculos() {
  const resultado = vehiculos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor);

  mostrarVehiculos(resultado);
}
```

Llamamos a la función en cada uno de los eventos:

```javascript
puertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = parseInt(e.target.value);
  filtrarVehiculos();
});
transmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;
  filtrarVehiculos();
});
color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;
  filtrarVehiculos();
});
```

Recuerda convertir a número entero el valor de puertas del objeto para que nos filtre correctamente.

Creamos las funciones filtrarPuertas, filtrarTransmision y filtrarColor

```javascript
function filtrarPuertas(vehiculo) {
  const { puertas } = datosBusqueda;
  if (puertas) {
    return vehiculo.puertas === puertas;
  }
  return vehiculo;
}
function filtrarTransmision(vehiculo) {
  const { transmision } = datosBusqueda;
  if (transmision) {
    return vehiculo.transmision === transmision;
  }
  return vehiculo;
}
function filtrarColor(vehiculo) {
  const { color } = datosBusqueda;
  if (color) {
    return vehiculo.color === color;
  }
  return vehiculo;
}
```

