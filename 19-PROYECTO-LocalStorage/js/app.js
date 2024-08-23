// Variables
const formulario = document.querySelector('#formulario');
const listaPosts = document.querySelector('#lista-posts');
let posts = [];

eventListeners()
// Event Listeners
function eventListeners() {
    // Cuando el usuario agrega una nueva publicación
    formulario.addEventListener('submit', nuevoPost);

    // Cuando el documento HTML está listo
    document.addEventListener('DOMContentLoaded', () => {
        posts = JSON.parse(localStorage.getItem('publicaciones')) || [];
        crearHTML();
    })
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

    const postObj = {
        id: Date.now(),
        post // recuerda que es igual que poner post: post cuando los nombres de la llave y el valor son iguales
    }

    // Añadir al array de publicaciones
    posts = [...posts, postObj];

    // Una vez añadida la publicación, crearemos su html
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
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

// Muestra una lista de las publicaciones
function crearHTML(postObj) {
    limpiarHTML();
    if (posts.length > 0) {
        posts.forEach(post => {
            // Agregar un botón para eliminar los posts
            const btnBorrar = document.createElement('A');
            btnBorrar.classList.add('borrar-post');
            btnBorrar.innerText = 'X';

            // Añadir la función de eliminar
            btnBorrar.onclick = () => {
                borrarPost(post.id);
            }

            // Crear el HTML
            const li = document.createElement('LI');
            li.style.display = 'flex';
            li.style.gap = '10px';
            // añadir el texto
            li.innerText = post.post;

            // Asignar el botón de eliminar
            li.appendChild(btnBorrar);
            // inyectarlo en el HTML
            listaPosts.appendChild(li);

        })
    }

    enviarAlStorage();
}

// Limpiar el HTML previo
function limpiarHTML() {
    while (listaPosts.firstChild) {
        listaPosts.removeChild(listaPosts.firstChild)
    }
}

// Guarda las publicaciones en el LocalStorage
function enviarAlStorage() {
    localStorage.setItem('publicaciones', JSON.stringify(posts))
}

function borrarPost(id) {
    posts = posts.filter(post => post.id !== id);
    crearHTML()
}