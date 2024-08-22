// Variables
const formulario = document.querySelector('#formulario');
const listaPosts = document.querySelector('#lista-posts');
let posts = [];

eventListeners()
// Event Listeners
function eventListeners() {
    formulario.addEventListener('submit', nuevoPost);
}

//Funciones
function nuevoPost(e) {
    e.preventDefault();

    // Text area donde el usuario escribe
    const post = document.querySelector('#post').value;

    // validación
    if (post === '') {
        mostrarError('La publicación no puede ir vacía');
        return; //evita que se ejecuten más líneas de código
    }
}


// Mostrar un mensaje de error
function mostrarError(error) {
    const mensajeErrorDiv = document.querySelector('.error');

    // Verificar si hay un mensaje de error previo para evitar duplicados
    if (!mensajeErrorDiv) {
        const mensajeError = document.createElement('P');
        mensajeError.textContent = error;
        mensajeError.classList.add('error')

        //Insertarlo en el contenido
        const contenido = document.querySelector('#contenido');
        contenido.appendChild(mensajeError);

        //Elimina la alerta a los 3 segundos
        setTimeout(() => {
            mensajeError.remove();
        }, 3000);
    }
}