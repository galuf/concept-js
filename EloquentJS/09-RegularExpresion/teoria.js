/*  ******* Expresiones Regulares ******** */

//Creando una expresion regular
let re1 = new RegExp("abc");
let re2 = /abc/;

console.log(typeof re1, typeof re2);
// > Object Object
// re1 y re2 son objetos y se pueden crear instanciando con RegExp()
// o usando -> /  /
// para incluir, caracteres especiales usamos \

let eighteenPlus = /abc\+/;

/**** Test de Expreciones Regulares ****/
// los objetos expresion regular poseen varios metodos, uno de ellos es test()

// es este caso evalua que la cadena "abc" aparesca en cualquier parte del string test
// no importa el lugar (inicio, medio, final), lo que imporata es que se encuentre
// y retornara un true, en caso contrario retornara False
console.log(/abc/.test("abcd"));
// > True
console.log(/abc/.test("abxcd"));
// > False

// Expresion para detectar que en el string existe un digito
console.log(/[0123456789]/.test("in 1999"));
// > True -> si detecta un digito
console.log(/[0-9]/.test("in 1999"));
// > True -> si detecta un digito

// Para detectar un correo electronico
let email = /\w@\w/;
if (email.test("alex@alex.com")) {
  console.log("Correo Correcto");
} else {
  console.log("Correo Incorrecto");
}

/************* ShortsCuts *****************/
// existen atajos, para simplificar las expresiones buscadas
// \d -> [0-9] -> Cualquier digito caracter
// \w -> Un caracter alfanumerico
// \s -> Cualquier carater de espaciado (tab, space, newline, similares)
// \D -> Caracter que no es un digito
// \W -> caracter no alfanumerico
// \S -> Caracter no de espaciado
// . -> cualquier caracter exceto salto de linea
// Ejemplo reconocer formtos de la forma:
// 01-30-2003 15:20
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));

// casos interesantes
let numP = /\d./;
console.log(numP.test("1 "));

let numP2 = /[\d.]/; // En este caso el [] indica la propiedad OR
// Un digito cualquiera o un punot (. pierde su funcion especial estando en [])
console.log(numP2.test("a."));

// Ejercicio : Detectar si una cadena es binaria o no
let no_binario = "0001201000120100101012222";
let binario = "001";

function Es_binario(cadena) {
  let notBin = /[^01]/; // ^ tiene la funcion de negacion
  // En este caso busca algun elemento distinto de 0 o 1
  if (notBin.test(cadena)) {
    console.log("No es binario");
  } else {
    console.log("Es binario");
  }
}

Es_binario(no_binario);
// > False -> No es binario
Es_binario(binario);
// > True -> Es binario
