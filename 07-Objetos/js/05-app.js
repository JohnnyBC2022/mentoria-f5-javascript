// Objetos dentro de objetos

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        características: {
            peso: '1kg',
            medida: '50cm'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

console.log(producto);
console.log(producto.informacion.fabricacion.pais);