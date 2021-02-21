// ******************* Bugs and Errors *************

/* ************ Uso de "use stric" **************** */

//Se puede usar use stric en la parte superior de una funcion o archivo
//haciendo que JS sea mas estricto

function WithOutStricMode() {
  // Sin "stric mode"
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy");
  }
  // Como no se definio counter con let, JS genera automaticamente esto
  // Creando counter como una variable global
}
//La funcion se ejecutara correctamente
WithOutStricMode();
// > 10 veces happy
//counter se definio como global en la funcion anterior
console.log(counter);
// > 10

// Lo anterior puede generar errores o alterar la variable counter es caso que ya exista
// para evitar eso "use stric" nos devolvera un error.
function WithStricMode() {
  // Con "stric mode"
  "use strict";
  for (counter1 = 0; counter1 < 10; counter1++) {
    console.log("Happy");
  }
}

WithStricMode();
// > counter1 is not defined

// Efectos de "use strict" in this.

// sabemos que this hace referencia al contexto en el cual se esta ejecutando el codigo actual
// Supongamos una funcion:
function Person(nombre) {
  console.log(this);
  this.nombre = nombre;
}
// en este caso como no se creo con new, el contexto de this sera el global
// Por lo cual, si hacemos un console.log(nombre) esto retornara Juan
let juan = Person("Juan");
// this -> global
console.log(nombre);
// > Juan

let alex = new Person("Alex");
// this -> contexto Person{}
// no existe elemento definido en el global (windows)

// En "use strict" es distinto
("use strict");
function Person1(user) {
  console.log(this);
  this.user = user;
}
// dado que no se instancio con new, this es indefinido (undefined)
let edy = Person1("Edy");
// -> No se puede establecer la propiedad 'user' en undefined

// Estos errores con el this tambien se pueden evitar usando una clase class directamente

/* ******** Debugger ************ */

// Una forma de encontrar errores es usar console.log()
// y mostrar el pantalla valores o resultados
// Otra forma de detener la ejecucion es usar debugger
console.log("1era accion");
let a = 10;
debugger; // Esto funcionara mejor en un navegador, es un punto de stop
console.log("2da Accion");
console.log(a);

/* *********** Excepciones - Try Catch  */
// Podemos prevenir un error, y no pausar la ejecucion, sino
// mostrar el error capturado

function prompDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction " + result);
}

function look() {
  if (prompDirection("Which way?") == "L") {
    return "a House";
  } else {
    return "Two angry Bears";
  }
}

try {
  console.log("You see", look());
} catch (err) {
  console.log("Algo fue mal: " + err);
}
