// clases y prototipos ES5

//para crear una clase lo que hacemos es definir una funcion
//en este caso creamos la clase Playlist
function Playlist(nombre){
  this.nombre = nombre
}

//los metodos para esta clase se crean en base a prototipos
//en este caso creamos los metodos play y el metodo eliminar
Playlist.prototype.play = function(){
  console.log(`Reproduciendo la playlist ${this.nombre}`)
}

Playlist.prototype.eliminar = function(){
  console.log(`Eliminando la playlist ${this.nombre}`)
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