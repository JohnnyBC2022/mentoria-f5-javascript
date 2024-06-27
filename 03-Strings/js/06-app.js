const producto = 'Monitor 20 Pulgadas';

// repetir una cadena de texto

/* const texto = 'en Promocion'.repeat(3); */
const texto = 'en Promocion  '.repeat(2.99); //¿Esto funciona? Si, utiliza la parte entera

console.log(texto);
console.log(`${producto} ${texto} !!!`);

// dividir un string

const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar música';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo Javascript #JavascripModerno"
console.log(tweet.split('#'));