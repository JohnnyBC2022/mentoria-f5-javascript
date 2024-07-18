// recorrer un array
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// En vez de acceder así a cada uno de los elementos
console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);
console.table(meses[3]);
console.table(meses[4]);
console.table(meses[5]);
console.table(meses[6]);

// ¿Cuánto mide el arreglo o cuántos elementos tiene?

console.log(meses.length) //7

// ¿Cómo accedemos al valor de cada elemento?
for (let posicion = 0; posicion < meses.length; posicion++) {
   console.log(meses[posicion]);
}
