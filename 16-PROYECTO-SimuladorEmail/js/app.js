document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    // Asignar eventos
    inputEmail.addEventListener('blur', validar)
    inputAsunto.addEventListener('blur', validar)
    inputMensaje.addEventListener('blur', validar)

    function validar(e) {
        
        if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.name} es obligatorio`, e.target.parentElement);
        } else {
            console.log('Hay algo escrito')
        }
    }

    function mostrarAlerta(mensaje, referencia) {
        // Generar una alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-rose-500', 'text-white', 'p-2', 'text-center');

        // Inyectar el error al formulario
        referencia.appendChild(error);
    }
});

