// Event Bubbling con Delegation (Otra forma de evitar el event bubbling)

const cardDiv = document.querySelector('.card')

cardDiv.addEventListener('click', e=>{
    if(e.target.classList.contains('titulo')){
        console.log('Hiciste click en título')
    }
    if(e.target.classList.contains('precio')){
        console.log('Hiciste click en precio')
    }
    if(e.target.classList.contains('card')){
        console.log('Hiciste click en card')
    }
})