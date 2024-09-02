// Librería para trabajar con fechas Moment. https://momentjs.com/

const diaHoy = new Date();

moment.locale('es')

console.log(moment().format('MMMM Do YYYY h:mm:ss pm'));
console.log(moment().format('LLLL', diaHoy));
console.log(moment().add(3, 'days').calendar());



