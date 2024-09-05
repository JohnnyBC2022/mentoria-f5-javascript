## Objetivo del proyecto

El objetivo de este proyecto es desarrollar un **calculador de seguros** utilizando **prototypes** en JavaScript. La aplicación permitirá a los usuarios seleccionar la marca de su vehículo, el año de fabricación y el tipo de seguro (básico o completo), y con base en esta información, calculará una cotización. Durante el desarrollo, se aprenderá a utilizar prototypes.

> **Nota:** Recuerda, que al usar **prototypes** conseguiremos que las funciones estén asociadas a un objeto específico.

## Desarrollo del proyecto

El proyecto se documentará paso a paso, explicando cada parte del código y el uso de prototypes. A medida que se vayan haciendo avances, se podrán consultar en el historial de **commits**.

## Primer paso: Creando los constructores

Lo primero que haremos es crear los **constructores**. Usaremos dos constructores: uno para el seguro, que almacenará la marca, el año y el tipo de seguro, y otro para la interfaz de usuario (UI), que manejará las interacciones con el DOM.

```javascript
function Seguro(marca, year, tipo) {
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}

function UI() {}
```

## Segundo paso: Añadiendo el primer prototype

Ahora, vamos a añadir el primer **prototype** para la clase `UI`. Este prototype será responsable de rellenar el desplegable de años en el formulario.

```javascript
UI.prototype.rellenarOpciones = () => {
  const max = new Date().getFullYear(),
    min = max - 20;

  const selectYear = document.querySelector("#year");

  for (let i = max; i > min; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option);
  }
};
```

Este código crea un prototype **_rellenarOpciones_** para la clase UI, que genera y añade opciones de años al desplegable en el formulario, desde el año actual hasta 20 años atrás.

## Tercer paso: Inicialización y carga de opciones

En este paso, vamos a inicializar una instancia de la clase `UI` y a utilizar el prototype `rellenarOpciones` cuando el contenido del DOM esté completamente cargado.

```javascript
const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
  ui.rellenarOpciones();
});
```

## Cuarto paso: Validación del formulario y cálculo del seguro

En este paso, vamos a añadir un evento al formulario para validar y calcular el seguro cuando se envíe.

Primero, definimos una función `eventListeners` que se encarga de añadir un evento de escucha al formulario (podríamos hacerlo con un prototype también, pero en este caso agrega una dificultad innecesaria):

```javascript
function eventListeners() {
  const formulario = document.querySelector("#calcular-seguro");
  formulario.addEventListener("submit", calcularSeguro);
}
```

## Quinto paso: Validación del formulario y cálculo del seguro

En este paso, vamos a implementar la función `calcularSeguro` que valida la información del formulario antes de proceder con el cálculo del seguro.

```javascript
function calcularSeguro(e) {
  e.preventDefault();
  const marca = document.querySelector("#marca").value;
  const year = document.querySelector("#year").value;
  const tipo = document.querySelector('input[name="tipo"]:checked').value;
  if (marca === "" || year === "" || tipo === "") {
    console.log("no pasa la validación");
  } else {
    console.log("pasa la validación");
  }
}
```

Si algún campo está vacío, se muestra un mensaje `no pasa la validación` en la consola. Si todos los campos tienen valor, se muestra `pasa la validación`.

## Sexto paso: Mostrar mensajes al usuario

Vamos a añadir una función para mostrar mensajes al usuario, ya sea de error o de éxito. Esta función se encargará de crear y mostrar un mensaje en la interfaz de usuario.

```javascript
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
  const div = document.createElement("div");
  if (tipo === "error") {
    div.classList.add("error");
  } else {
    div.classList.add("correcto");
  }
  div.classList.add("mensaje", "mt-10");
  div.textContent = mensaje;
  const formulario = document.querySelector("#calcular-seguro");
  formulario.insertBefore(div, document.querySelector("#resultado"));
};
```
## Séptimo paso: Modificamos calcular seguro para mostrar mensajes de error

En esta sección, lo que tenemos que hacer para que se muestre el mensaje de error es llamar a la función `mostrarMensaje` de UI y le pasamos como parámetros el mensaje que queramos que se muestre el tipo de mensaje.

```javascript
function calcularSeguro(e) {
    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;
    // Leer el año seleccionado
    const year = document.querySelector('#year').value;
    // Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (marca === '' || year === '' || tipo === '') {
        // Mostrar mensaje de error si algún campo está vacío
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
    } else {
        // Si todos los campos están completos, se puede continuar con el cálculo
        console.log('pasa');
    }
}
