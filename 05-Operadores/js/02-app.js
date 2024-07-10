// Operadores de comparación

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// operador de igualdad
console.log(numero1 == numero3); //false
console.log(numero1 == numero2); //true

// comparador estricto
console.log(numero1 === numero2); //false (aquí se fija en valor y tipo de dato)
console.log(typeof numero1);
console.log(typeof numero2);

//¿Cómo podríamos hacer con los métodos que devuelva true en la comparación estricta entre 1 y 2?

console.log(numero1 === parseInt(numero2));

// Comparar si son distintos
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2); //true
console.log(password1 !== password2); //true


