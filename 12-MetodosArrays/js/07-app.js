const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

// .concat
const resultado = meses.concat(meses2)
console.log(resultado)

const resultado2 = meses.concat(meses2, meses3)
console.log(meses3)

//spread operator

const resultado3 = [...meses,...meses2];
console.log(resultado3)
const resultado4 = [...meses,...meses2, ...meses3];
// El orden tiene que ser exactamente el que queramos

console.log(resultado4)
const resultado5 = [...meses,...meses2, ...meses3, 'Otro mes'];
console.log(resultado5)
//¡Ojo!
const resultado6 = [...meses,...meses2, ...meses3, ...'Otro mes'];
console.log(resultado6)



