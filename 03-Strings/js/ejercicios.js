//Ejercicio 1

const texto = 'hola mundo';

console.log(texto.toUpperCase())

// Ejercicio 2
const texto2 = "Estoy aprendiendo Javascript";

console.log(texto2.length)
console.log(texto2.slice(18,28))
console.log(texto2.substring(18))

// Ejercicio 3
const texto3 = "Estoy aprendiendo Python";
console.log(texto3)
console.log(texto3.replace('Python', 'Javascript'))

// Ejercicio 4

const colores = "rojo, verde, azul, amarillo, naranja"

console.table(colores.split(", "))

// Ejercicio 5

const texto5 = "              Hola, mundo.            ";

console.log(texto5)
console.log(texto5.trim())
console.log(texto5.trimStart().trimEnd())
