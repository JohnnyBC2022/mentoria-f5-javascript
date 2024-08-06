# Objetivo del proyecto

Es hora de aplicar los conceptos aprendidos hasta ahora, para ello vamos a ver paso a paso como crear un carrito de compras y añadir productos de forma dinámica. Hay que tener en cuenta que el objetivo principal es repasar especialmente, la ***manipulación del DOM***, ***manejo de eventos*** y uso de ***funciones***, así como ir entendiendo la lógica de negocio.

## Desarrollo del proyecto

La explicación será paso a paso, se puede seguir la evolución de todas las partes siguiendo el historial de ***commits***.

## Primer Paso: Entendiendo el proyecto

Inicialmente tenemos un carrito de compras que está vacío.

<img src="img/capturas/captura1.png">

En esta tabla debemos ir añadiendo productos a nuestro carrito cada vez que hagamos click en el botón agregar al carrito que tenemos en cada una de las card. Manejaremos la información como un objeto del cual obtendremos datos que añadiremos de forma dinámica al cuerpo de la tabla con identificador ***"lista-carrito"*** de nuestro documento ***HTML***.

<img src="img/capturas/captura2.png">

Lo primero que vamos a hacer es crear unas variables para poder acceder a la parte del HTML que nos interesa:

```javascript
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaEventos = document.querySelector('#lista-eventos');
```

Una vez que tenemos las variables declaradas, vamos a crear una función que nos permita registrar todos los ***Event Listeners***. Y dentro de la función, manejaremos un evento que al hacer click en el botón agregar al carrito, nos añada el evento deportivo al carrito.

```javascript
cargarEventListeners();
function cargarEventListeners() {
    listaEventos.addEventListener('click', agregarEvento)
}

function agregarEvento() {
    console.log('Presionando en evento')
}
```

Por el momento, tenemos una función que al hacer click nos muestra en la consola el mensaje ***presionando en evento***, pero tenemos un problema. El evento se dispara en cualquier parte del contenido de la lista de eventos. Habíamos visto el concepto de event bubbling, es decir, se está propagando el evento de una forma que no queremos, ya que nos interesa que solo se ejecute la función ***agregarEvento()*** al pulsar en el botón que queremos manipular.

Si modificamos ligeramente la función ***agregarEvento()***, podemos saber la clase del elemento sobre el que estamos haciendo click, y esto nos va a facilitar la tarea.

```javascript
function agregarEvento(e) {
    console.log(e.target.classList)
}
```

Por lo tanto, el objetivo es ejecutar la función solo cuando pulsemos sobre el elemento que contiene la clase ***agregar-carrito***. Para ello, utilizaremos una sentencia de control que nos verifique que estamos haciendo click únicamente sobre ese elemento.

Observa, que elemento tiene una apariencia de botón, pero el elemento HTML es una etiqueta ***<a></a>*** y que cuando hacemos click, la pantalla se situa en la parte de arriba, por lo tanto debemos, evitar ese comportamiento que tienen los enlaces por defecto (es decir, redirigirnos al enlace correspondiente). Para ello usamos el método ***preventDefault()***

```javascript
function agregarEvento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        console.log('Agregando al carrito')
    }
}
```

Ahora, ya sabemos que nos estamos comunicando correctamente con el elemento que queremos, vamos a utilizar los conceptos aprendidos en ***"traversing the DOM"*** para recorrer el HTML y extraer la información que nos interesa para poder generar el HTML y que se muestre en el carrito.

## Segundo paso: Leer los datos del evento que seleccionamos.

El objetivo de este paso es leer el contenido del HTML al que le dimos click y extraer la información del evento que estamos añadiendo al carrito.

<img src="img/capturas/captura3.png">

Si observamos nuestro documento, tenemos que nuestro elemento que contiene la clase ***agregar-carrito*** esta dentro del elemento con clase ***info*** y a su vez dentro de un elemento con la clase ***card***. Es de este elemento del que vamos a querer extraer la información que queremos añadir al carrito y para poder seleccionar este elemento, podemos utilizar ***parentElement***, que tendremos que usar 2 veces, para ubicarnos en el lugar correcto. Vamos a comprobar que estamos en el lugar del documento correcto, modificando la función ***agregarEvento()*** y cuando hagamos click, llamaremos a la función que leerá los datos del elemento en el que nos encontramos, y lo más importante, sabremos que estamos situados en la parte correspondiente.

```javascript
function agregarEvento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        console.log(e.target.parentElement.parentElement)
        leerDatosEvento()
    }
}
```

A continación, vamos a mejorar un poco el código almacenando en una variable el evento seleccionado. Como ya sabemos que cuando hacemos click en cualquiera de los botones, nos selecciona el elemento que queremos, debemos pasar como argumento el curso seleccionado a la función ***leerDatosEvento()***.

```javascript
function agregarEvento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const eventoSeleccionado = e.target.parentElement.parentElement;
        leerDatosEvento(eventoSeleccionado);
    }
}
```

Ahora, sabemos que la función ***leerDatosEvento()*** va a recibir un parámetro que podemos llamar como queramos. Y vamos a hacer que se muestre por consola el HTML que hemos seleccionado.

```javascript
function leerDatosEvento(eventoEscogido) {
    console.log(eventoEscogido)
}
```
Antes de continuar, vamos a hacer un resumen de lo que hace nuestro código hasta ahora:

1. Cuando se dispara el evento (en nuestro caso, un click) y agregarEvento es llamada, la función recibe el evento como e.
2. e.preventDefault() detiene la acción predeterminada del elemento.
3. Si el elemento en el que se hizo click (e.target) tiene la clase ***agregar-carrito***, el código selecciona el elemento abuelo de e.target.
4. eventoSeleccionado (el elemento abuelo) se pasa a la función leerDatosEvento.
5. leerDatosEvento toma eventoSeleccionado y lo imprime en la consola del navegador.

Esto permite capturar y manipular un elemento específico del DOM cuando ocurre un evento, y luego podemos usar esa información para realizar otras acciones.

Para finalizar, vamos a crear un objeto con el contenido del evento actual.

```javascript
const infoEvento = {
        imagen: eventoEscogido.querySelector('img').src,
        deporte: eventoEscogido.querySelector('.categoria').textContent,
        precio: eventoEscogido.querySelector('.precio span').textContent,
        id: eventoEscogido.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    console.log(infoEvento);
```
Hemos creado un objeto con la información que nos interesa. Por un lado la ruta de la imagen, que utilizaremos para mostrar una miniatura en el carrito, el evento deportivo seleccionado, el precio de la entrada, un id que necesitaremos para identificar cada entrada que compramos y por defecto, asignaremos una cantidad inicial de 1, que posteriormente incrementaremos.