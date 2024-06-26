// Método para reemplazar
const producto = 'Monitor 20 Pulgadas';

console.log(producto);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

// Método para cortar
console.log(producto.slice(0,10)); // le decimos inicio y final
console.log(producto.slice(8)); // le indicamos el inicio y lo hará hasta el final
console.log(producto.slice(2,1)) // no funcionará

//Alternativa
console.log(producto.substring(0,10));
console.log(producto.substring(2,1)); // si funciona e internamente es como si hicieramos substring(1,2) , consejo para pregunta técnica

const usuario = 'Jonathan';
console.log(usuario.substring(0,1));
// esto lo hace Google para mostrar la inicial del nombre de usuario en el círculo
console.log(usuario.charAt(0))