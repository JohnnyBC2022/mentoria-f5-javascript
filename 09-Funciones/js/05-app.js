// parámetros y argumentos

function sumar(a,b) { // a y b son parámetros
    console.log(a + b)
}

sumar(2,3); // 2 y 3 son argumentos

// Parámetros:

// Son variables que se definen en la declaración de una función.
// Representan los valores que la función espera recibir cuando se llama.
// Son como "placeholders" que se llenarán con valores específicos cuando la función sea ejecutada.

// Argumentos:

// Son los valores reales que se pasan a la función cuando se llama.
// Son los datos que se utilizan en lugar de los parámetros.

sumar(200,187)
sumar(200.52,187.115)

function saludar(nombre, apellido){
    console.log(`Hola, ${nombre} ${apellido}`);
}

saludar('Shaila', 'González');
saludar();