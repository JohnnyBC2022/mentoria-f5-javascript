# Objetivo del proyecto

El objetivo de este proyecto es desarrollar un **calculador de seguros** utilizando **prototypes** en JavaScript. La aplicación permitirá a los usuarios seleccionar la marca de su vehículo, el año de fabricación y el tipo de seguro (básico o completo), y con base en esta información, calculará una cotización. Durante el desarrollo, se aprenderá a utilizar prototypes.

> **Nota:** Recuerda, que al usar **prototypes** conseguiremos que las funciones estén asociadas a un objeto específico.

# Desarrollo del proyecto

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
  const marca = document.querySelector("#marca").value;
  const year = document.querySelector("#year").value;
  const tipo = document.querySelector('input[name="tipo"]:checked').value;
  if (marca === "" || year === "" || tipo === "") {
    ui.mostrarMensaje("Todos los campos son obligatorios", "error");
  } else {
    console.log("pasa");
  }
}
```

## Octavo paso: Eliminar mensajes después de un tiempo

Para mejorar la experiencia del usuario, vamos a eliminar el mensaje de error o éxito después de un breve período de tiempo. Esto se logra utilizando `setTimeout`.

```javascript
function mostrarMensaje(mensaje, tipo) {
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
  setTimeout(() => {
    div.remove();
  }, 3000);
}
```

## Noveno paso: Mejora en la validación del formulario y mostrar mensaje de éxito.

Hemos mejorado la validación del formulario para que, en caso de campos vacíos, se muestre un mensaje de error y se detenga la ejecución de la función. Esta mejora asegura que la función `calcularSeguro` no continúe si hay campos obligatorios vacíos y si el usuario ha rellenado todos los campos correctamente, no se ejecute ese código.

Además, podemos reutilizar la función `mostrarMensaje` para que nos muestre el mensaje que queramos cuando la validación sea correcta.

```javascript
function calcularSeguro(e) {
  e.preventDefault();
  const marca = document.querySelector("#marca").value;
  const year = document.querySelector("#year").value;
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  if (marca === "" || year === "" || tipo === "") {
    ui.mostrarMensaje("Todos los campos son obligatorios", "error");
    return;
  }
  ui.mostrarMensaje("Calculando...", "correcto");
}
```

Después de validar los datos del formulario, se procede a crear una instancia del objeto **Seguro** dentro de la función `calcularSeguro`, pasándole como argumentos los valores introducidos por el usuario en el formulario:

```javascript
const seguro = new Seguro(marca, year, tipo);
console.log(seguro);
```

Podemos comprobar que se reciben los datos correctamente en forma de objeto haciendo `console.log`.

## Décimo paso: Método para calcular el seguro en función de la marca.

Añadimos el método **calcularSeguro** al prototipo de **Seguro**. Este método se encargará de calcular el costo del seguro en base a la marca del vehículo. Vamos a necesitar una variable que almacene la cantidad y asumimos un precio base de 200 (puedes poner el que quieras), a partir de ahí, aplicamos diferentes multiplicadores según la marca seleccionada (puedes cambiarlos si lo deseas):

```javascript
Seguro.prototype.calcularSeguro = function () {
  /*
    1 = Seat 1.20
    2 = Opel 1.10
    3 = Citroen 1.05
    */
  let cantidad;
  const PRECIO_BASE = 500;
  switch (this.marca) {
    case "1":
      cantidad = PRECIO_BASE * 1.2;
      break;
    case "2":
      cantidad = PRECIO_BASE * 1.1;
      break;
    case "3":
      cantidad = PRECIO_BASE * 1.05;
      break;
    default:
      break;
  }
  console.log(cantidad);
};
```

Para que esto funcione, recuerda llamar al prototype una vez instanciada la clase Seguro.

```javascript
const seguro = new Seguro(marca, year, tipo);
seguro.calcularSeguro();
```

En este punto, podemos observar como nos calcula el precio del seguro en función de la marca escogida por el usuario en la consola del navegador.

## Undécimo paso: Cálculo de la antigüedad del vehículo y ajuste del precio

A continuación, se calcula la diferencia de años entre el año actual y el año seleccionado por el usuario. Este dato se utiliza para reducir el costo del seguro. Por cada año de antigüedad, el costo se reduce un 3%.

```javascript
const antiguedad = new Date().getFullYear() - this.year;
cantidad -= (antiguedad * 3 * cantidad) / 100;
// recuerda que es como poner:
// cantidad = cantidad - ((antiguedad * 3) * cantidad) / 100
```
