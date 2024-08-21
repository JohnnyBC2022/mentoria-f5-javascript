// Extraer datos del local storage

const nombre = localStorage.getItem('nombre');
console.log(nombre);
const nombre2 = localStorage.getItem('nombre2'); //devuelve null

const productoJSON = localStorage.getItem('producto');

console.log(productoJSON);
// para convertir el string que nos devuelve a JSON, podemos usar el método parse

console.log(JSON.parse(productoJSON));

const meses = localStorage.getItem('meses')
console.log(JSON.parse(meses))

