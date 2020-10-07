// Prototipos
function Cliente(nombre,saldo){
  this.nombre = nombre
  this.saldo = saldo
}

Cliente.prototype.tipoCliente = function(){
  console.log(`accediendo con function ${this.nombre}`)
}

Cliente.prototype.prueba = ()=>{
  console.log(`accediendo con un arrow function ${this.nombre}`)
}

// Porque no usar arrow function en este prototipo?
// el function busca en el objeto actual, y el arrow function buscara en la ventana global

//instancia
const pedro = new Cliente("Pedro",1000)
pedro.tipoCliente()
pedro.prueba()

//Notacion de Clase

class Persona {

  #codigo // propiedad privada

  constructor(nombre,edad,codigo){
    this.nombre = nombre
    this.edad = edad
    this.#codigo = codigo
  }

  mostrarInformacion(){
    return `Persona ${this.nombre}, tu edad es de ${this.edad} de cod ${this.#codigo}`
  }
}

const Alex = new Persona("Alex",24,2013)

console.log(Alex.mostrarInformacion()) // genera errores en versiones antiguas de node y algunos servidores web