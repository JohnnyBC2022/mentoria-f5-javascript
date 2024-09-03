// Object literal: recordemos que no te permite crear objetos dinámicos y reutilizables

const cliente = {
    nombre: 'Jonathan',
    saldo: 1000
}

console.log(cliente);
console.log(typeof cliente);

// Object constructor: permite crear objetos dinámicos y reutilizables
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const cliente2 = new Cliente('Jonathan', 1000);
console.log(cliente2)

// cada objeto tiene un proto y ese proto son las funciones que les puedes pasar a ese tipo de objeto