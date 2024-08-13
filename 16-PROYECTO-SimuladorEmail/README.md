# Objetivo del proyecto

Después de haber creado el primer proyecto, vamos a afianzar conceptos mediante un nuevo proyect. En este caso, vamos a simular el envío de correos electrónicos mediante un formulario. Repasaremos de nuevo la **_manipulación del DOM_**, **_manejo de eventos_** y uso de **_funciones_** para que podamos ir asentando las bases al respecto. Además, ampliaremos lo visto en el proyecto anterior, y aprenderemos como **validar un formulario** y usaremos algún concepto del que no hemos hablado hasta ahora como son las **expresiones regulares**.

## Desarrollo del proyecto

La explicación será paso a paso, se puede seguir la evolución de todas las partes siguiendo el historial de **_commits_**. Hay algo que debemos tener en cuenta en este proyecto, y es el uso de **_TAILWINDCSS_** que he aplicado a los estilos, ya que no se trata de un repositorio en el que el diseño sea lo preferente. Por eso, he elegido esta librería de estilos que nos permite tener una apariencia vistosa y moderna, pero que no nos robará mucho tiempo, ya que el objetivo es aprender **_JAVASCRIPT_**.

## Primer Paso

Para comenzar, queremos que se ejecute nuestro código una vez cargado todo el documento HTML, así que crearemos un evento que permita la ejecución de todo el código al iniciar:

```javascript
document.addEventListener("DOMContentLoaded", function () {});
```

Dentro de este evento, vamos a seleccionar los elementos de la interfaz que vamos a querer manipular y validar mediante **_JavaScript_** mediante el uso de los selectores correspondientes:

```javascript
document.addEventListener("DOMContentLoaded", function () {
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
});
```

## Segundo paso: añadir eventos para validar un formulario.

Llegados a este punto, tenemos que añadir los eventos para poder "escuchar" lo que hace el usuario cuando está rellenando la información. Lógicamente, estos eventos, deben ser congruentes con lo que queremos escuchar. No tiene sentido escuchar cuando un usuario hace click en un campo del formulario, pero si cuando está escribiendo o cuando cambia de campo.

Uno de los eventos que se utilizan en la validación de formularios es **_blur_**:

```javascript
inputEmail.addEventListener("blur", function () {
  console.log("Salí del input");
});
```

En este caso, añadimos un **_Evento de escucha_** al campo Email de tipo **_"blur"_**. Cuando el usuario, pierda el foco en este campo, es decir, cuando el usuario cambie a otro campo o haga click fuera del formulario, se ejecutará el código que tenemos en la función (en este caso el console.log())

Hay otro tipo de evento para validación de campos de formulario que es **_input_** que ejecutará la función mientras el usuario esté escribiendo en ese campo, pero no lo hace cuando el usuario pierda el foco en el campo.

Una vez que ya sabemos, que estamos "escuchando" el elemento del DOM que nos interesa, queremos averiguar lo que el usuario está escribiendo, por lo tanto debemos escuchar el valor de ese elemento.

```javascript
inputEmail.addEventListener("blur", function (e) {
  console.log(e.target.value);
});
```

Ahora, si escribimos algo en el campo Email, vemos como se muestra en la consola del navegador lo que estamos escribiendo.

Para el resto de campos que queremos validar, podríamos hacer exactamente lo mismo con el resto de las variables y funcionaría correctamente lo que estamos tratando de hacer.

```javascript
inputEmail.addEventListener("blur", function (e) {
  console.log(e.target.value);
});
inputAsunto.addEventListener("blur", function (e) {
  console.log(e.target.value);
});
inputMensaje.addEventListener("blur", function (e) {
  console.log(e.target.value);
});
```

## Tercer paso: crear una función para validar

Ya hemos visto que el código funciona correctamente hasta ahora, pero una buena práctica es refactorizar el código (en mi caso y en el de muchos programadores, cuando el código hace 3 veces lo mismo, se puede extraer a una función).

En este caso vamos a crear una función para validar los campos del formulario, por el momento nuestra función va a ser la siguiente (así comprobamos que funciona):

```javascript
function validar() {
  console.log("desde la función de validar");
}
```

Entonces, debemos modificar nuestros eventos, para que ejecuten la función **_validar()_** cada vez que se dispare ese evento.

```javascript
inputEmail.addEventListener("blur", validar);
inputAsunto.addEventListener("blur", validar);
inputMensaje.addEventListener("blur", validar);
```

**_IMPORTANTE: LA SINTAXIS ES SIN PARÉNTESIS _**
La sintaxis en este caso es el nombre de la función sin paréntesis, ya que queremos que se ejecute una vez lanzado el evento de escucha. Si le pusieramos los paréntesis, estaríamos invocando a la función y se ejecutaría cuando cargue el documento HTML (Recuerda, que estamos ejecutando nuestro código desde un evento de tipo 'DOMContentLoaded').

Para que nuestra función escuche el evento en cada campo debemos pasarlo como parámetro a la función. Esto hará que se ejecute el código dentro del elemento que corresponda cuando perdamos el foco en cada uno de los campos correspondientes.

```javascript
function validar(e) {
  console.log(e.target.value);
}
```

Ahora tenemos 3 eventos que utilizan la misma función que podemos reutilizar todas las veces que queramos.

## Cuarto paso: detectar si hay campos vacíos.

De forma sencilla, en un campo no hay nada escrito si el valor de ese campo es un **_string_** vacío. Por lo tanto, podemos utilizar una sentencia de control que nos diga que está vacío si no hay nada escrito y que nos diga que no lo está si hay algo escrito en ese input. Esto se puede hacer usando un **_IF...ELSE_**.

```javascript
function validar(e) {
  if (e.target.value === "") {
    console.log("Está vacío");
  } else {
    console.log("Hay algo escrito");
  }
}
```

Este código tiene un problema, si dentro de un campo pulsamos varias veces sobre la barra espaciadora y pasamos al siguiente campo, la consola nos muestra el mensaje de que hay algo escrito. Esto es debido a que los espacios en blanco son caracteres (recordar en el capítulo de strings que cuando contábamos caracteres los espacios en blanco cuentan).

Así que debemos añadir un método a la condición del IF que nos elimine los espacios en blanco al principio y final de cada campo (Ver método **_TRIM_**). Por lo tanto, nuestra validación ya se comporta como queremos:

```javascript
function validar(e) {
  if (e.target.value.trim() === "") {
    console.log("Está vacío");
  } else {
    console.log("Hay algo escrito");
  }
}
```

