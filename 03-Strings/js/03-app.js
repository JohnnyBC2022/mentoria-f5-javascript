// Concatenación

const producto = 'Monitor 20" ';
const precio = "99 euros ";

console.log(producto.concat(precio));
console.log(producto.concat("75 €"));

console.log("El producto " + producto + "tiene un precio de: " + precio);
// otra variante que se usa menos
console.log("El producto ", producto, "tiene un precio de: ", precio);

// template strings o plantillas literales, esto es de una versión más moderna de Javascript (EcmaScript 6) se usan backtips

console.log(`El producto ${producto} tiene un precio de ${precio}`)