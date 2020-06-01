// Herencia via prototipe ES5

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

//Herencia
function Cancion(nombre,genero){
  Playlist.call(this,nombre) // funciona como el constructor
  this.genero = genero
}

//generamos la herencia
Cancion.prototype = Object.create(Playlist.prototype)
const cancion = new Cancion('Nothing Else Matters','Heavy Metal')

console.log(cancion.nombre)
cancion.play()

