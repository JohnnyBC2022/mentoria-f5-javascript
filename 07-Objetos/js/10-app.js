// Unir 2 objetos

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

const caracteristicas = {
    peso: '1kg',
    medida: '50cm'
}

const resultado = Object.assign(producto, caracteristicas)

console.log(resultado);

//Spread operator o Rest Operator (muy utilizado)

const resultado2 = {...producto, ...medidas} //es como si le dijeramos con "..." copia y asignalo dentro del objeto
console.log(resultado2);