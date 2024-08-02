const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer')

/* btnFlotante.addEventListener('click',()=>{
     console.log('hiciste click en el botón') 
})
 */
function mostrarOcultarFooter() {
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo')
        btnFlotante.classList.remove('activo')
        this.textContent = "Ver footer" // podemos referirnos al propio botón, porque con this, sabe que nos referimos al evento de este botón
    } else {
        footer.classList.add('activo')
        btnFlotante.classList.add('activo')
        this.textContent = 'X Cerrar'
    }
    console.log(footer.classList)
}

btnFlotante.addEventListener('click', mostrarOcultarFooter)