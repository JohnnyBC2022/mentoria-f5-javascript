const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(Object.keys(producto)); //Devuelve las claves o propiedades de un objeto (puede servir para saber si un objeto tiene información)

console.log(Object.values(producto)) //devuelve los valores de un objeto

console.log(Object.entries(producto)) //retorna los pares clave-valor