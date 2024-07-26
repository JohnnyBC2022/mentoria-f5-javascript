// for...in: itera sobre los índices.
// Aunque su sintaxis sea similar for ...of itera sobre arrays, mientras que for ...in lo hace sobre objetos



const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript'];

for( let pendiente in pendientes) {
    console.log(pendiente)
}

const automovil = {
    model: 'Ford',
    year: 1969,
    motor: '6.0'
}

for(let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`)
}



