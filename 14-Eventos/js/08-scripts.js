// Evitar la propagación con contenido creado...
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Baloncesto Masculino';
parrafo1.classList.add('categoria');
parrafo1.classList.add('basketball');

// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Final de baloncesto';
parrafo2.classList.add('titulo');

// 3er parrafo (si quisieramos)...
const parrafo3 = document.createElement('p');
parrafo3.textContent = '200€ por persona';
parrafo3.classList.add('precio');
parrafo3.onclick = function(){
    nuevaFuncion(1);
} //también se puede usar una arrow function

// crear el div...
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);

// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/sport6.jpg';

// Crear el Card..
const contenedorCard = document.createElement('div');
contenedorCard.classList.add('contenedorCard');
//faltan clases para que se vea la card como el resto, pero no importa para este ejemplo

// Vamos a asignar la imagen al card...
contenedorCard.appendChild(imagen);

// y el info
contenedorCard.appendChild(info);

// Insertarlo en el HTML...
const contenedor = document.querySelector('.sports .contenedor-cards');
contenedor.appendChild(contenedorCard); // al inicio info


function nuevaFuncion(id) {
    console.log('click desde nueva función', id)
}