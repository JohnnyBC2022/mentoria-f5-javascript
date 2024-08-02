// eventos de formulario

const formulario = document.querySelector('#formulario')

function validarFormulario(e) {
    e.preventDefault();
    console.log('abre nueva pagina')
}

formulario.addEventListener('submit',validarFormulario)

const btn = document.querySelector('.btn-flotante')

window.addEventListener('scroll', () => {
    const scrollPX = window.scrollY;
    console.log(scrollPX)

    if(scrollPX < 300) {
        btn.style.display = 'none';
    } else if(scrollPX > 300) {
        btn.style.display = 'block'
    }
})


