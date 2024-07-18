// Unir 2 objetos

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

console.table(producto);
const caracteristicas = {
    peso: '1kg',
    medida: '50cm'
}
console.table(caracteristicas);

const resultado = Object.assign(producto, caracteristicas)

console.table(resultado);

//Spread operator o Rest Operator (muy utilizado)

const resultado2 = {...producto, ...caracteristicas} //es como si le dijeramos con "..." copia y asignalo dentro del objeto
console.log(resultado2);