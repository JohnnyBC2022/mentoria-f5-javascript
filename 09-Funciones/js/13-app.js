// Añadir funciones a un objeto

const reproductor = {
    reproducir: id =>
        console.log(`Reproduciendo canción con el id ${id}`)
    ,
    pausar: () => console.log('Pausando..'),
    borrar: id => console.log(`Borrando canción...${id}`),
    crearPlaylist: (nombre) => console.log(`Creando la playlist de ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion() {
        console.log(`this.cancion`)
    }
}

reproductor.nuevaCancion = 'Sash - Ecuador'
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Música relajante para coders');
reproductor.reproducirPlaylist('Electrónica');

