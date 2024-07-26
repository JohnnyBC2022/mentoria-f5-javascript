const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes,i)=>{
    console.log(i);
    console.log(mes);
    if(mes === 'Abril') {
        console.log(`Encontrado en el indice ${i}`)
    }
})

// Encontrar el indice de Abril

const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice) // si no lo encuentra devuelve un -1

// Encontrar un índice de un arreglo de objetos...
const indice2 = carrito.findIndex(producto=> producto.precio === 100);
console.log(indice2); // devuelve la posicion del primer objeto que encuentra