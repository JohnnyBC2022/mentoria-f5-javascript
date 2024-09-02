const diaHoy = new Date();
const diaHoy2 = new Date('24-02-2000');
const diaHoy3 = new Date('January 5 2000');

let valor;

valor = diaHoy;

//Métodos
valor = diaHoy.getFullYear();
valor = diaHoy.getMonth(); // Enero lo cuenta como el mes 0, hay que tenerlo en cuenta
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime(); // devuelve los milisegundos transcurridos desde el 01/01/1970

valor = diaHoy.setFullYear(2010);

valor2 = diaHoy.toLocaleString();
valor2 = diaHoy.toLocaleDateString();
valor2 = diaHoy.toLocaleTimeString();

console.log(valor2)

