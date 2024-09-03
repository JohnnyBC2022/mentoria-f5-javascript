// Heredar un prototype

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
}

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retiro) {
    this.saldo -= retiro;
}

/* function Persona(nombre, saldo, telefono) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.telefono = telefono;
}
 */

// Como hay atributos que podemos heredar de cliente, podemos utilizar la siguiente sintaxis

function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo)
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype) // con esta sintaxis le pasamos los prototypes de Cliente a Persona

Persona.prototype.constructor = Cliente;

// Debemos utilizar los prototypes antes de instanciar un objeto
const jonathan = new Persona('Jonathan', 5000, 600123456)

console.log(jonathan.nombreClienteSaldo())

console.log(jonathan)

Persona.prototype.mostrarTelefono = function(){
    return `El teléfono de esta persona es ${this.telefono}`
}

console.log(jonathan.mostrarTelefono())