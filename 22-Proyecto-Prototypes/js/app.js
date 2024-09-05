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
        console.log('no pasa')
    } else {
        console.log('pasa')
    }
}