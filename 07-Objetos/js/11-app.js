/* const nombre = 'Hola';
const precio = 20;
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El Producto: ${nombre} tiene un precio de ${precio}`)
    }
}

producto.mostrarInfo(); // si hacemos esto así no encuentra los valores dentro del objeto, se va a buscarlos fuera del objeto */

// Para evitar este comportamiento se usa this. que es una forma de referirnos al propio objeto

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El Producto: ${this.nombre} tiene un precio de ${this.precio}`)
    }
}
const producto2 = {
    nombre: "tablet",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El Producto: ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

// Recuerda, this es una forma de referirse al objeto en sí mismo

producto.mostrarInfo();
producto2.mostrarInfo();