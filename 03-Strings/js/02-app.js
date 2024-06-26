// Propiedades y Métodos para strings
const producto = 'Monitor 20"';

// Conocer la cantidad de letras de la cadena de texto
console.log(producto.length);

/* cuando en una barra de búsqueda ponemos una palabra para que nos la encuentre, esta función si encuentra la palabra nos devuelve su posición dentro del string y si no la encuentra, devuelve -1 */
console.log(producto.indexOf('Monitor'));

// otro método para saber si una palabra está incluida en el string
console.log(producto.includes('Monitor'));
console.log(producto.includes('monitor'));
console.log(producto.includes('tablet'));


