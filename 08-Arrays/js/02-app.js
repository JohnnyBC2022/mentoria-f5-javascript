const numeros = [10, 20, 30, 40, 50, [1, [2, 4, "hola"], 3]];

console.table(numeros);
// Acceder a un elemento de un array
console.log(numeros[0]);
console.log(numeros[20]); //devuelve un undefined

console.log(numeros[5][1]); //acceder a subelementos de un array
console.log(numeros[5][1][2]);




