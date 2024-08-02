// Eventos de formulario

const formulario = document.querySelector('#formulario')

/* formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('Buscando...')
    console.log(e.target.method)
    console.log(e.target.action)
    console.log(e.target.value)
}) */

// elimina el comportamiento por defecto de un evento, en este caso si usamos preventDefault, no se enviará el formulario y no se abrirá el enlace que hemos definido en el action. Así podemos evitar que los enlaces no se abran hasta que hagamos una validación o lo que queramos.

function validarFormulario(){
    e.preventDefault(e);
    console.log('Consultar una api...');
    console.log(e.target.action);
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


