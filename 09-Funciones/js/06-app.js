// Parámetros por defecto

function saludar(nombre = 'Desconocido', apellido = ''){
    console.log(`Hola, ${nombre} ${apellido}`);
}

saludar('Jonathan');
saludar();

// Se ha añadido recientemente a Javascript
