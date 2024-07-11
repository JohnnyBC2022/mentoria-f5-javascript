const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto);

/* ¿Cómo podemos agregar un par clave-valor a un objeto? */

producto.imagen = 'imagen.jpg';
console.log(producto);

/* ¿Y eliminar un par clave-valor? */
delete producto.disponible;
console.log(producto);

/* Esto se puede utilizar para acceder a la información de un usuario alojada en la base de datos, y devolver la información como objeto borrando la contraseña de ese objeto */