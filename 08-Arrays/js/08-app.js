const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Destructuring en objetos
// Recordemos que tenemos una estructura (un objeto en este caso y sacamos la información de su valor (destructuring))

const {nombre} = producto;
console.log(nombre);


// Destructuring con Arreglo
// Recordemos, destructuring es extraer un valor y asignarlo a una variable en un solo paso
const numeros = [10,20,30,40,50];

const [primero, segundo, tercero] = numeros;

console.log(primero);
console.log(segundo);
console.log(tercero);

// A diferencia de los objetos, ¿y si solo queremos acceder al valor del cuarto?

const [ , , ,cuarto] = numeros;
console.log(cuarto)

// ¿si queremos los tres elementos finales?
// Esta sintaxis es muy común en React
const[ , ,...quinto] =numeros;
console.log(quinto);

// Tenemos que tener en cuenta la posicion del array