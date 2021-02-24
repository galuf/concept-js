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

/************* Repetir patrones *****************/

// + -> para repetir una o mas veces
// * -> para repetir 0 o mas veces

console.log(/'\d'/.test("'1234'"));
// > False -> solo aceptara un digito betewen -> '1'
console.log(/'\d+'/.test("'1234'"));
// > true -> acepta la cadena 1234 que tiene varios caracteres numericos
console.log(/'\d+'/.test("''"));
// > False -> como es + va de 1 a mas, para aceptar 0 caracteres usamos *
console.log(/'\d*'/.test("''"));
// > True -> * acepta desde 0 caracteres a mas

// ? -> Opcional (nos indica que el cararcter puede estas 1 veces o no estar)
let vecino = /vecinou?/; // la letra u es opcional
console.log(vecino.test("vecinou")); // "u" esta
// True
console.log(vecino.test("vecino")); // "u" no esta
// True

// para indicar un numero preciso de repeticiones usamos llaves y el numero {4}
// para indicar un rango {2,4}, debe ocurrir como minimo 2 veces o como maximo 4 veces

// Ejemplo de la fecha:
let fecha = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(fecha.test("1-30-2003 8:20"));
// True

// Tambien podemos expecificar {3,} -> esto nos dice q se repetira de 3 a mas

// Para agrupar secuencias y repetirlas usamos parentesis
console.log(/boo+(hoo+)+/i.test("Boohooooohoohoooo"));
// True
// La i al final indica insensitive case, no se afecta por mayusculas y minusculas
console.log(/boo+(hoo+)+/.test("Boohooooohoohoooo"));
// False -> si toma en cuenta las mayusculas y minusculas

/************* Otros metodos de RegEx *****************/

// El metodo test(), es bastante facil de usar, pero existen otros metodos

//exec() -> excute : retorna null si no encuentra un match, y en caso contrario
// Retorna un objeto con la informacion del match

let match = /\d+/.exec("one two 100");
console.log(match);
// > [ '100', index: 8, input: 'one two 100', groups: undefined ]
console.log(match.index);
// > 8 -> posicion en el string en donde se encontro el match

// los string tienes el methodo match, que tiene un comportamiento similar
console.log("one two 100".match(/\d+/));
// el emetodo exec() pata RegEx == match() para strings

// Podemos ver que exect() -> puede retornar subgrupos
// estos sub grupos de generan con los parentesis
let textComilla = /'([^']*)'/;
// ingresaremos un testo en comillas, dentro de las comilla no puede haber alguna comilla
console.log(textComilla.exec("She said 'Hello'"));
// >[
//   "'Hello'", -> primer match (elemnto betewen '  ')
//   'Hello', -> segundo match (caracteres que no sean ')
//   index: 9,
//   input: "She said 'Hello'",
//   groups: undefined
// ]

// si tenemos un testo opcional(?) como subgrupo y no se encuentra, estonces nos retornara undefined
console.log(/bad(ly)?/.exec("bad"));
// > [ 'bad', undefined, index: 0, input: 'bad', groups: undefined ]

console.log(/(\d)+/.exec("123"));
// el subgrupo se tomara sola al ultimo caracter -> 3
// > [ '123', '3', index: 0, input: '123', groups: undefined ]
