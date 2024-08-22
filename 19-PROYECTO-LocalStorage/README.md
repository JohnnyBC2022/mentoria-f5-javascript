# Objetivo del proyecto

Este proyecto tiene como objetivo aprender el manejo del almacenamiento local del navegador. Al finalizar el proyecto serás capaz de almacenar datos y leerlos para mostrarlos en el documento HTML. Además, repasaremos alguno de los conceptos vistos en proyectos anteriores. El proyecto es muy sencillo (podría ser el típico TO-DO List), el usuario visualiza un área de texto donde puede escribir y al pulsar sobre el botón añadir visualizará el texto introducido. Una vez visualizado, se podrá eliminar.

## Desarrollo del proyecto

La explicación será paso a paso, se puede seguir la evolución de todas las partes siguiendo el historial de **_commits_**.

## Primer paso: comenzando el proyecto

Al igual que hemos hecho en proyectos anteriores, vamos a ir declarando alguna de las variables que va a almacenar los selectores que vamos a manejar en nuestra pequeña aplicación. También vamos a inicializar un **_Array vacío_** que va a recoger nuestras publicaciones. También añadiremos los eventos de escucha que necesitamos y las funciones que vamos a ejecutar cuando se hayan "escuchado" los eventos:

```javascript
// Variables
const formulario = document.querySelector("#formulario");
const listaPosts = document.querySelector("#lista-posts");
let posts = [];

eventListeners();
// Event Listeners
function eventListeners() {
  formulario.addEventListener("submit", nuevoPost);
}

//Funciones
function nuevoPost(e) {
  e.preventDefault();
  console.log("agregando...");
}
```

