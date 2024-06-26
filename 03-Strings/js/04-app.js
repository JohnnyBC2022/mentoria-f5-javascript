// eliminar espacios en blanco

const producto = '                         Monitor 20 "        ';

console.log(producto);
console.log(producto.length);

// Eliminar espacios en blanco del inicio
console.log(producto.trimStart());
// Eliminar espacios en blanco del final
console.log(producto.trimEnd());

// Se pueden encadenar métodos en Javascript, a esto se le conoce como chaining

// estos métodos son más recientes
console.log(producto.trimStart().trimEnd());

//Antes solo existía un método
console.log(producto.trim())