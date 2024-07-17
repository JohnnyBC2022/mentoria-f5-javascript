// Desestructuración en objetos anidados

const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        caracteristicas: {
            peso: '1kg',
            medida: '50cm'
        },
        fabricacion: {
            pais: 'España'
        }
    }
}


// Esta sintaxis puede ser compleja, pero si la entendemos, hace más legible el código para cualquier persona que lo lea
const { nombre, informacion ,informacion: {caracteristicas, caracteristicas: {peso}} } = producto;

console.log(nombre);
console.log(informacion);
console.log(caracteristicas);
console.log(peso);