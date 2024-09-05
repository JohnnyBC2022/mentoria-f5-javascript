// Constructores
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo
}

function UI() { }

// Prototype para rellenar de forma dinámica el input año
UI.prototype.rellenarOpciones = () => {
    const max = new Date().getFullYear(), // Con esta función obtenemos el año actual
        min = max - 20;

    const selectYear = document.querySelector('#year');

    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option)
    }
}

// Prototype que va a mostrar alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo)=>{
    const div = document.createElement('div');

    if(tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto')
    }
    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    // Insertar en el HTML
    const formulario = document.querySelector('#calcular-seguro'); // podríamos dejar esta variable como global, pero no pasa nada por tenerla otra vez
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);
}


// Instanciar UI
const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {
    ui.rellenarOpciones();
})

eventListeners();
function eventListeners() {
    const formulario = document.querySelector('#calcular-seguro');
    formulario.addEventListener('submit', calcularSeguro);
}

function calcularSeguro(e) {
    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;
    // Leer el año seleccionado
    const year = document.querySelector('#year').value;
    // Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if(marca === '' || year === '' || tipo === ''){
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }
    console.log('calculando...')
}