//El local storage es una característica del navegador web que permite almacenar datos en el dispositivo del usuario. La información que guardas ahí no se borra cuando cierras el navegador. Solo se borra si tú mismo decides eliminarla o si el navegador la elimina automáticamente (en algunos casos muy específicos). Los datos son accesibles desde cualquier pestaña o ventana del mismo navegador mientras se use el mismo origen (mismo dominio, puerto y protocolo)

//Agregar datos al local storage
localStorage.setItem('nombre', 'Jonathan')

// La diferencia de session Storage es que los datos solo permanecen hasta que se cierra el navegador. Los datos son accesibles solo dentro de la misma pestaña o ventana donde se almacenaron.

sessionStorage.setItem('nombre', 'Jonathan')

// Local Storage, "solo" almacena datos de tipo string

const producto = {
    nombre: 'Monitor 24 pulgadas',
    precio: 300
}

// tenemos que convertir el objeto a string para poder almacenarlo mediante el método stringify
const productoString = JSON.stringify(producto)

localStorage.setItem('producto', productoString)

const meses = ['Enero', 'Febrero', 'Marzo'];

const mesesString = JSON.stringify(meses)
localStorage.setItem('meses', mesesString)