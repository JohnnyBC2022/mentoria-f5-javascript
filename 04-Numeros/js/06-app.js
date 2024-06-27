// Métodos para números

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1)
console.log(Number.parseInt(numero1)); //convierte a número entero
console.log(Number.parseFloat(numero2)); //convierte a número decimal o flotante
console.log(Number.parseFloat(numero3));


//Revisar si un número es entero o no
console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero3));
