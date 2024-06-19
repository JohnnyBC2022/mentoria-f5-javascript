// El uso de var se utilizaba más en versiones anteriores de Javascript, se sigue usando, pero hay que tener en cuenta el alcance (scope), que lo veremos en mayor profundidad.

// Inicializar una variable con un valor
var producto = "Monitor de 24 pulgadas";
console.log(producto);

// A las variebles se les puede cambiar el valor
producto = "Monitor de 19 pulgadas";
console.log(producto);

//Javascript es un lenguaje de tipo dinámico y no es necesario especificar el tipo de dato
producto = 20;
console.log(producto);

// Se pueden inicializar sin valor y asignarlo después
var disponible;
disponible = true;
disponible = false;

// Inicializar múltiples variables.
/* var categoria = 'Computadoras';
var marca = 'Marca famosa';
var calificación = 5; */
var categoria = 'Computadoras',
    marca = "Marca Famosa",
    calificación = 5;

// Las variables no se pueden inicializar con números
/* var 99dias;
var dias99;

var 01_;
var _01;
var _usuario;
var __usuario; */

// Tipos de nombre para variables con varias palabras
var nombreProducto; //camelCase (La más común)
var nombre_producto; //snake_case
var NombreProducto // PascalCase (mejor usarla para clases)

// Hay un concepto que se conoce como Hoisting que pertenece a Javascript, esto quiere decir que se puede usar una variable antes de tener asignado un valor

var userName;
console.log(userName);

userName = prompt('introduce tu nombre:');
console.log("Hola, " + userName)

