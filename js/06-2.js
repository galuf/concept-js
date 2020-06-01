//clases y objetos ES6 

class Playlist{
  constructor(nombre){
    this.nombre = nombre
  }

  play(){
    console.log(`Reproduciendo la playlist ${this.nombre}`)
  }
  
  eliminar(){
    console.log(`Eliminando la playlist ${this.nombre}`)
  }
}

//hacemos una instancia de Playlist
const playlist1 = new Playlist('Rock 90s')
const playlist2 = new Playlist('Punk 90s')

console.log(playlist1)
console.log(playlist2)

//llamamos a los metodos
playlist1.play()
playlist2.play()

playlist1.eliminar()
playlist2.eliminar()