// El problema de no usar prototypes

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const jonathan = new Cliente('Jonathan', 1000);

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El Cliente ${nombre} tiene un saldo de: ${saldo}`;
}

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `El Cliente ${nombre} tiene un saldo de: ${saldo} y pertenece a la categoría: ${categoria}`;
}

console.log(formatearCliente(jonathan))

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const empresa1 = new Empresa('Aprendiéndo Javascript con Jonathan', 4000 ,'Cursos en Línea');

console.log(formatearEmpresa(empresa1))

//En este código el problema es que si queremos agregar más funciones para formatear o manipular los objetos Cliente y Empresa, tendríamos que seguir creando funciones separadas para cada tipo de objeto. Esto lleva a la duplicación del código y dificulta su mantenimiento

// Las funciones no están asociadas directamente a los objetos que deberían manipular lo que implica una reutilización ineficiente.
