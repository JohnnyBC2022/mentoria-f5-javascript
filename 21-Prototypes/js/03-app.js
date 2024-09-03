// Los prototypes (prototipos) en JavaScript son una característica clave que permite a los objetos heredar propiedades y métodos de otros objetos.

// Objetos y Herencia:

// En JavaScript, cada objeto tiene un enlace interno a otro objeto llamado su prototipo (prototype en inglés).
// Este prototipo también puede tener su propio prototipo, creando una cadena de prototipos (prototype chain).
// Si intentas acceder a una propiedad o método en un objeto y JavaScript no lo encuentra en ese objeto, buscará en su prototipo, luego en el prototipo de ese prototipo, y así sucesivamente hasta llegar al final de la cadena de prototipos.
// Prototype de una Función Constructora:

// Cuando creas un objeto utilizando una función constructora, ese objeto hereda las propiedades y métodos del prototipo de la función constructora.

// En las versiones antiguas de JavaScript (antes de ECMAScript 6 o ES6), no existía la palabra clave class, y toda la herencia y la reutilización de código se hacían a través de prototypes.

// Creación de un Prototype

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}


Cliente.prototype.tipoCliente = function () {
    let tipo;
    if(this.saldo > 10000) {
        tipo = 'Platino';
    } else if(this.saldo > 5000) {
        tipo = 'Oro'
    } else {
        tipo = 'Normal'
    }

    return tipo;
} // hay que usar esta sintaxis, ya que declarar una function mediante function busca dentro del mismo objeto, mientras que las arrow function se van al alcance global y va a dar un error undefined

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retiro) {
    this.saldo -= retiro;
}

//Instanciarlo
const pedro = new Cliente('Pedro', 6000);

pedro.tipoCliente(); //El proto mantiene la referencia hacia el objeto actual

console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
pedro.retiraSaldo(1000)
console.log(pedro.nombreClienteSaldo());

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Código con Jonathan', 4000 ,'Cursos en Línea');

console.log(CCJ)

// Al utilizar los prototypes, vemos que tipoCliente() es un método que está solo disponible para el objeto Cliente