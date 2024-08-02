// Eventos de scroll, se usa mucho para hacer animaciones cuando vamos haciendo scroll por una página

/* window.addEventListener('scroll', () => {
    console.log('scrolling')
    const scrollPX = window.scrollY;
    console.log(scrollPX)
}) */


    window.addEventListener('scroll', () => {
        const premium = document.querySelector('.premium');
        const ubicacion = premium.getBoundingClientRect(); // nos da informacion de su posición respecto al (0,0) arriba a la izquierda
        console.log(ubicacion)
        if(ubicacion.top < 784) {
            console.log('El elemento ya está visible')
        } else {
            console.log('aún no, haz más scroll')
        }
    })

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

// Añadimos la función que al hacer click en el enlace nos desplace la página al hero de forma suave
btn.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});