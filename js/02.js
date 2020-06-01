// This con Explicit binding

function persona(){
  console.log(`Hola, soy ${this.nombre}`)
}

const informacion = {
  nombre : 'Alex',
  trabajo:'Programador'

}

// En el ejemplo anterior no ahi forma de comunicacion entre persona y el obj
//para usar el this con explicit binding debemos usar el metodo "call"
//este metodo esta en todas las funciones y nos sirve para indicar en que 
//contexto se ejecuta esa funcion

persona.call(informacion)

// veamos algo mas interesante con este tema

const generosMusicales = ['Heavy Metal', 'Rock']

function persona2(el1,el2){
  console.log(`Hola, soy ${this.nombre} y me gusta el ${el1} y el ${el2}`)
}
persona2.call(informacion,generosMusicales[0],generosMusicales[1])

//en este caso vemos una limitacion del call, debemos pasar los parametros
//de la funcion persona2 una por una

// para este caso entonces -> Explicit binding con call, cuando pasas arreglo
//debes colocar todas las posiciones

//explicit binding con .apply, (si toma un arreglo)
persona2.apply(informacion,generosMusicales)

//explicit binding con .bind
//es igual a .call solo que esta genera una nueva funcion
const nuevFn = persona2.bind(informacion,generosMusicales[0],generosMusicales[1])

nuevFn()



