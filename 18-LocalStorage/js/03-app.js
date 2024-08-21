// Eliminar elementos del local storage

localStorage.removeItem('nombre');

// Si queremos utilizar localStorage para hacer un CRUD, no tenemos por defecto un método para actualizar. Así que lo primero que tenemos que hacer es definir que vamos a actualizar

const mesesArray = JSON.parse(localStorage.getItem('meses'))
console.log(mesesArray);

// Modificamos el valor
mesesArray.push('nuevo mes');
console.log(mesesArray)

//Volvemos a establecer el valor
localStorage.setItem('meses', JSON.stringify(mesesArray))

// Aquí está reescribiendo el valor una vez modificado

// limpiar todo el localStorage
localStorage.clear();