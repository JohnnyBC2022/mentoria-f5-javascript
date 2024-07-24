// Diferencia entre Function Declaration y Expression (pregunta de entrevista)

// Declaración de funciones (Function Declaration)

sumar();
function sumar() {
    console.log(2 + 2)
}

// aquí podemos utilizar la función antes de crearla


// Expresión de función (Function Expression)

sumar2();
const sumar2 = function() {
    console.log(3 + 3)
}

// aquí NO PODEMOS utilizar la función antes de crearla


// ¿Por qué pasa esto?
// Cuando JavaScript lee tu código, antes de empezar a ejecutarlo, primero mira y recuerda todas las variables y funciones que has declarado. Este proceso se llama hoisting. Es decir,Javascript se ejecuta en 2 ciclos, creación y ejecución.

// En el primer caso, cuando hace el primer recorrido recuerda que hay una función y por eso se puede llamar antes de crear la función.

// En el segundo caso, cuando hace el primer recorrido recuerda que hay una variable que se llama sumar2 pero no le asignó todavía un valor, por eso no se puede llamar antes de crear la función