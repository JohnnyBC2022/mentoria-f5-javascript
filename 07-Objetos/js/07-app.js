const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// recuerda que una constante una vez que está definida no se puede reasignar un nuevo valor

/* const nombreProducto = 'Monitor';
nombreProducto = 'Tablet'; */

// sin embargo, en los objetos si se puede

producto.disponible = false;

delete producto.precio

// como nos puede interesar que no se comporte así, existen métodos que vamos a ver a continuación
console.log(producto);