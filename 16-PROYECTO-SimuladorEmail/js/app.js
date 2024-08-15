document.addEventListener('DOMContentLoaded', function () {

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');

    // Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    btnReset.addEventListener('click', function (e) {
        e.preventDefault();

        if (confirm('¿Estás seguro de que deseas reiniciar el formulario?')) {
            // Reiniciar el objeto:
            email.email = '';
            email.asunto = '';
            email.mensaje = '';

            formulario.reset();
            comprobarEmail();
        }
    });


    function validar(e) {
        if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.name} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email introducido no es válido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        };

        limpiarAlerta(e.target.parentElement);

        // Asignar los valores al objeto email
        email[e.target.name] = e.target.value.trim().toLowerCase();

        // Comprobar el objeto email:
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);
        // Generar una alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-rose-500', 'text-white', 'p-2', 'text-center', 'msg-error');
        // Inyectar el error al formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        // Comprobar si ya existe una alerta
        const alerta = referencia.querySelector('.msg-error')
        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        if (Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        };

        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }
});

