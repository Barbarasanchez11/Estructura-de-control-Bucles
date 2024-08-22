//números impares entre el 0 y el 20

for(let i = 0; i <= 20; i++) {
    if(i % 2 !== 0) {
        console.log(i)
    }
}

function playlist() {
    let nombrePlaylist = prompt('Introduce el nombre de la playlist: ');
    let numeroCanciones = parseInt(prompt('Agrega el número de canciones: '));
    let canciones = [];
  
    for (let i = 0; i < numeroCanciones; i++) {
      let cancion = prompt(`Introduce el nombre de la cancion' ${i + 1}`);
      canciones.push(cancion);
  
      let cancionesRestantes = numeroCanciones - (i + 1);
      console.log(`Restan ${cancionesRestantes} canciones por agregar.`);

      console.log(`Playlist actual: ${canciones.join(", ")}`);
    }
    console.log(`La playlist "${nombrePlaylist}" ha sido creada con las siguientes canciones:`);
    console.log(canciones.join(", "));
  }
  playlist()

  