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

## Quinto paso: generar una alerta en la validación de campos vacíos.

Ahora que ya está funcionando nuestra validación de forma correcta, vamos a manipular el DOM para mostrar un mensaje al usuario y que sepa que el campo no puede estar vacío.

Podríamos escribir el código en el IF para que muestre al usuario un mensaje, pero en su lugar, vamos a crear una función para mostrar alertas (que invocaremos en esta parte), ya que nos va a permitir manejar distintos tipos de alerta y tendremos un código más reutilizable y limpio.

```javascript
function validar(e) {
  if (e.target.value.trim() === "") {
    mostrarAlerta();
  } else {
    console.log("Hay algo escrito");
  }
}

function mostrarAlerta() {
  console.log("Hubo un error...Está vacío");
}
```

Como el usuario no va a inspeccionar la consola, vamos a generar una alerta en el HTML utilizando scripting de JavaScript. Lo primero que vamos a hacer es crear un elemento de HTML, para ello, tenemos el método **_createElement()_** al que le pasaremos como parámetro cualquier etiqueta de HTML. (Como buena práctica, se recomienda escribir el nombre de la etiqueta con mayúsculas, pero en minúsculas funciona)

```javascript
const error = document.createElement("P");
```

Una vez creado el elemento HTML (en este caso un párrafo), accedemos a éste y podemos asignarle un texto.

```javascript
error.textContent = "Hubo un error";
console.log(error);
```

Es mejor usar textContent que innerHTML, ya que innerHTML no escapa los datos. Además, textContent genera un código más seguro.

## Sexto paso: inyectar la alerta en el HTML.

Ya vemos que tenemos la alerta en la consola, así que nos queda mostrarla en el HTML, para ello vamos a seleccionar la parte donde la vamos a mostar, así que vamos a crear una nueva variable en la que vamos a almacenar un nuevo selector y lo añadimos en la parte del código donde estamos creando esas variables.

```javascript
const formulario = document.querySelector("#formulario");
```

Vamos a usar este selector, para inyectar (que se muestre) el error en la pantalla. Para ello, vamos a usar **_appendchild_** que lo que hace es añadir un elemento como hijo al elemento que le estamos diciendo y en este caso lo estará haciendo al final.
Podríamos haber usado innerHTML, pero nos iba a sustituir todo el HTML del formulario y no nos interesa ese comportamiento.

<img src="./img/captura1.png">

Como este proyecto lo estamos haciendo con **_TAILWIND_** vamos a darle algunos estilos, para ello vamos a darle alguna clase en la función mostrarAlerta() de este modo:

```javascript
error.classList.add("bg-rose-500", "text-white", "p-2", "text-center");
```

## Séptimo paso: Personalización de errores.

Para personalizar cada uno de los mensaje, vamos modificar ligeramente nuestra función mostrarAlerta. Ahora, va a recibir un mensaje como parámetro. El mensaje que reciba como atributo cuando invocamos a la función es lo que se va a mostrar en pantalla.

```javascript
function validar(e) {
  if (e.target.value.trim() === "") {
    mostrarAlerta("El campo Email es obligatorio");
  } else {
    console.log("Hay algo escrito");
  }
}

function mostrarAlerta(mensaje) {
  // Generar una alerta en HTML
  const error = document.createElement("P");
  error.textContent = mensaje;
  error.classList.add("bg-rose-500", "text-white", "p-2", "text-center");

  // Inyectar el error al formulario
  formulario.appendChild(error);
}
```

El problema que tenemos ahora, es que da igual el campo que dejemos vacío, nos va a mostrar siempre el mismo mensaje. Pero cuando estamos validando un campo, podemos saber a que campo estamos accediendo mediante **_e.target_**. Hay un montón de atributos a los que podemos acceder dentro de cada input, así que vamos a usarlos para mostrar un mensaje más personalizado según el campo que dejemos vacío. En este caso, podemos usar el **_id, name u otro que nos permita averiguar cada campo_**.

Así que si reemplazamos el mensaje por:

```javascript
mostrarAlerta(`El campo ${e.target.name} es obligatorio`);
```

Nos mostrará ese mensaje de forma dinámica en función del nombre del input.

## Octavo paso: mostrar las alertas junto a su campo.

Vamos a modificar un poco el código para inyectar cada alerta cerca de su campo. Para ello, vamos a utilizar los conceptos vistos en **_traversing the DOM_**

Lo primero que tenemos que hacer es indicarle a la función mostrarAlerta que le vamos pasar como parámetro el lugar donde queremos inyectar el HTML de la alerta, es decir le vamos a indicar una referencia.

```javascript
function mostrarAlerta(mensaje, referencia) {
  // Generar una alerta en HTML
  const error = document.createElement("P");
  error.textContent = mensaje;
  error.classList.add("bg-rose-500", "text-white", "p-2", "text-center");

  // Inyectar el error al formulario
  formulario.appendChild(error);
}
```

Si nos fijamos en el HTML:

<img src="./img/captura2.png">

Podemos observar, que cada input está dentro de una div y es a esta div a la que queremos acceder, para ello podemos usar **_parentElement_** y esta es la referencia que le vamos a pasar a nuestra función como argumento dentro de nuestra función validar.

```javascript
function validar(e) {
  if (e.target.value.trim() === "") {
    mostrarAlerta(
      `El campo ${e.target.name} es obligatorio`,
      e.target.parentElement
    );
  } else {
    console.log("Hay algo escrito");
  }
}
```

Y en vez de inyectar el error en el formulario como lo hacíamos antes, lo vamos a hacer en esta referencia. Como la referencia es siempre en función del evento que está escuchando en cada uno de los campos, la alerta se va a colocar de forma correcta.

<img src="./img/captura3.png">

# Noveno paso: prevenir que se muestren múltiples alertas.

Llegados a este punto, podemos observar que si dejamos varias veces vacío el mismo campo, la alerta se genera varias veces. Vamos a ver como evitar este comportamiento.

Cuando generamos la alerta, le añadiamos una clase al elemento que habíamos creado, podemos apoyarnos en estas clases para saber si ya hay un elemento creado con esa clase y en caso de que lo hubiera no crear de nuevo la alerta. Por lo tanto, voy a añadir una nueva clase "msg-error" al elemento para poder identificarlo (podéis usar la que queráis siempre que sea única para los elementos que estamos creando y no esté presente en el resto del HTML):

```javascript
error.classList.add(
  "bg-rose-500",
  "text-white",
  "p-2",
  "text-center",
  "msg-error"
);
```

Ahora, dentro de nuestra función mostrarAlerta, vamos a comprobar si existe ese elemento y si la hay, la va a eliminar.

```javascript
const alerta = document.querySelector(".msg-error");
if (alerta) {
  alerta.remove();
}
```

Vemos que ya no duplica alerta, pero nos genera un problema. Está buscando en el documento la clase "msg-error" y la elimina cuando existe. Esto provoca que si cambiamos a otro campo, nos va quitar la alerta. Es decir, va a encontrar la alerta aunque no estemos en ese campo y la va a limpiar y lo que queremos es que se mantenga una sola vez hasta que pase la validación.

Lo que tenemos que hacer es esa limpieza cerca del input en el que estamos trabajando, así que si en vez de aplicarlo a todo el documento, le decimos que seleccione en la referencia que le estamos pasando, solo lo va a hacer ahí y no buscará en todo el documento.

```javascript
const alerta = referencia.querySelector(".msg-error");
```
