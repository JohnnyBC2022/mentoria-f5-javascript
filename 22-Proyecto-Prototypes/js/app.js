// Constructores
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo
}

// Prototype asignado a Seguro que va a realizar el cálculo con los datos
Seguro.prototype.calcularSeguro = function () {
    /*
    1 = Seat 1.20
    2 = Opel 1.10
    3 = Citroen 1.05
    */
    let cantidad;
    const PRECIO_BASE = 500;
    switch (this.marca) {
        case '1':
            cantidad = PRECIO_BASE * 1.20;
            break;
        case '2':
            cantidad = PRECIO_BASE * 1.10;
            break;
        case '3':
            cantidad = PRECIO_BASE * 1.05;
            break;
        default:
            break;
    }

    // Calcular la diferencia de años entre el actual y el escogido por el usuario
    const antiguedad = new Date().getFullYear() - this.year;

    // Cada año de antigüedad, la cuota se va a reducir un 3%
    cantidad -= ((antiguedad * 3) * cantidad) / 100;

    /*
        Si el seguro es básico, se incrementa en un 20%
        Si el seguro es a todo riesgo se incrementa en un 40%
    */

    if (this.tipo === 'basico') {
        cantidad *= 1.2;
    } else {
        cantidad *= 1.4;
    }
    return cantidad;
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
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');

    if (tipo === 'error') {
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

UI.prototype.mostrarCuota = (total, seguro) => {
    const { marca, year, tipo } = seguro;

    let textoMarca;

    switch (marca) {
        case '1':
            textoMarca = 'Seat'
            break;
        case '2':
            textoMarca = 'Opel'
            break;
        case '3':
            textoMarca = 'Citroen'
            break;
        default:
            break;
    }
    // Generar un div que muestre la cuota
    const div = document.createElement('DIV');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header">Tu cuota:</p>
        <p class="font-normal">Marca: <span class="font-bold">${textoMarca}</span></p>
        <p class="font-normal">Año: <span class="font-bold">${year}</span></p>
        <p class="font-normal">Tipo de seguro: <span class="font-bold capitalize">${tipo}</span></p>
        <p class="font-normal">Total: <span class="font-bold text-xl">${total}€</span></p>
    `;

    const resultadoDiv = document.querySelector('#resultado');


    // Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none'; // Se oculta el spinner y se muestra el resultado
        resultadoDiv.appendChild(div);
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

    if (marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }
    ui.mostrarMensaje('Calculando...', 'correcto');

    // Eliminar el HTML de los cálculos de las cuotas anteriores
    const resultados = document.querySelector('#resultado div');
    if (resultados != null) {
        resultados.remove()
    }

    // Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.calcularSeguro().toFixed(2);

    // Utilizar el prototype que realiza el cálculo de la cuota
    ui.mostrarCuota(total, seguro);
}