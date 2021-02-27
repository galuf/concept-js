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
// >[ '100', index: 8, input: 'one two 100', groups: undefined ]
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

/************* Date Class *****************/

// podemos instancias Date() y crear un fecha
console.log(new Date());
// > 2021-02-25T15:02:31.451Z
// puedes pasar al constructor el año, mes(0-11),dia,horas, minutos,seg,miliseg
// en caso de omitirlo se toma la fecha actual y en la hora se pone 00:00:00 0000

// TIMESTAMPS
// Es la representacion numerica de la cantidad de milisegundos transcurridos desde
// 1970 01 01 00:00:00 hasta la fecha actual
// para accder al timestamp usas getTime()
console.log(new Date(1970, 0, 1, 1, 0, 0, 0));
// > 1970-01-01T06:00:00.000Z
console.log(new Date(1970, 0, 1, 1).getTime());
// > 21600000 milisegundos
//transformemos -> 21600 segundos -> 360 minutos -> 6 horas

/****** Definir posicion de la cadena de busqueda *****/

let fecha = /(\d{1,2})-(\d{1,2})-(\d{4})/;
// esta expresion regular solicita 3 parametros
// Pero sea la siguiente cadena
let miFecha = "100-1-30000";
// Esta fecho sera aceptada porq si existe la expresion buscada
// > 00-1-3000
console.log(fecha.exec(miFecha));
// > [
//   '00-1-3000', -> match
//   '00', -> 1er sub grupo
//   '1', -> 2do subgrupo
//   '3000', -> 3er sub grupo
//   index: 1,
//   input: '100-1-30000',
//   groups: undefined
// ] -> recordar que los subgrupos se definen con los parentesis

// Como podemos limitar a la cadena?
// usamos los simbolos -> ^ y $
// ^ -> nos dice el punto de inicio q buscamos
// $ -> nos dice el punto final q buscamos

let fecha_exacta = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
let miFecha2 = "100-1-30000";
console.log(fecha_exacta.test(miFecha2));
// > False, esta ves no lo acepta
console.log(fecha_exacta.test("10-2-2000"));
// True, ahora si busca desde 10 el match
// en el anteriro caso inicia la busqueda desde 100, como no cumple es falso

// Veamos mas ejemplos :
console.log(/^\d+$/.test("123")); // -> busca una secuencia de digitos, si se pone algo que nos es digito retornara false
console.log(/^!/.test("!xasf")); // -> cualquier string que enpiece en !

// Como definir el inicio y el final a una palabra?
console.log(/cat/.test("concatenar"));
// True -> Busca el match en cualquier posicion
console.log(/\bcat\b/.test("concatenar"));
// False -> busca cat al inicio y final de la cadena
console.log(/\bcat\b/.test("cat"));
// True

/************* Busqueda de un patron **********/

// para unir varias expresines regulares usamos | -> pipe
let animalCount = /\b\d+ (pig|cow|chiken)s?\b/;
console.log(animalCount.test("15 pigs"));
// > True
console.log(animalCount.test("15 pigChikens"));
// > False

/*********** Replace methods**************/

// los strings tienen el metodo replace, el cual reemplaza caracteres de la cadena por algo q se le indique
let cadena = "papa";
let newCadena = cadena.replace("a", "u");
console.log(cadena);
// > papa -> recordar que los strings son datos primitivos e inmutables
console.log(newCadena);
// > el replace retornara newCadena

// Podemos buscar la cecuencia a reemplazar mediante una expresion regular
console.log("Borobudur".replace(/[ou]/, "a")); // Cuando encuentre una 'o' o una 'u' cambiarla por 'a'
// > Barobudur
// Nos damos cuenta de que solo el primer caracter encontrado se reemplazo
// Para buscar todas las matchs en la cadena usaremos 'g' al final de la expresion regular
console.log("Borobudur".replace(/[ou]/g, "a")); // Cuando encuentre una 'o' o una 'u' cambiarla por 'a'
// > Barabadar

/********* Ventajas de usar replace method con RegEx **********/

// Supongamos que tenemos una cadena de la forma
// FirstName, LastName -> Lo que queremos hacer es cambiar esto a :
// LastName FirstName -> Como lo hariamo ?

let formatoInicial = "Barbara, Liskov\nTony, Flores\nGiomar, Vilca";
console.log(formatoInicial.replace(/(\w+), (\w+)/g, "$2 $1"));
// la expresion regular solicita palabra1, palabra2
// palabra 1 se almacena en $1 y palabra2 en $2 -> hacen referencia a los subgrupos definidos con los parentesis
// esto hace que modifiquemos la cadena
// > Barabara Liskov
// > Flores Tony
// > Vilca Giomar

// Es posible pasar como segundo argumento del replace a una funcion
let s = "the cia and fbi";
console.log(
  s.replace(/\b(fbi|cia)\b/g, (string) => {
    return string.toUpperCase();
  })
);

// > the CIA and FBI
// todos los elemetos match se pasan como parametro a la funcion y se operan

// otro ejemplo de paso de parametro como funcion
let stock = "1 limon, 2 cebollas y 101 huevos";
function reducirUno(match, amount, unit) {
  console.log(`match: ${match}, amount:${amount}, unit: ${unit}`);
  amount = Number(amount) - 1;
  if (amount == 1) {
    unit = unit.slice(0, unit.lenght - 1);
  } else if (amount == 0) {
    amount = "no";
  }
  return `${amount} ${unit}`;
}

console.log(stock.replace(/(\d+) (\w+)/g, reducirUno));

// > match: 1 limon, amount:1, unit: limon
// > match: 2 cebollas, amount:2, unit: cebollas
// > match: 101 huevos, amount:101, unit: huevos
// > no limon, 1  y 100 huevos

// Modifiquemos el programa de apellidos y nombres y hagamoslo con funciones
// sea el string:

let formatoInicial1 = "Barbara, Liskov\nTony, Flores\nGiomar, Vilca";
function cambia(match, nombre, apellido) {
  return `${apellido} ${nombre}`;
}
console.log(formatoInicial1.replace(/(\w+), (\w+)/g, cambia));
// > Liskov Barbara
// > Flores Tony
// > Vilca Giomar

// Tener en cuenta, los parametros que recive la funcion son (match, 1er Subgrupo, 2do Subgrupo, 3er Subgrupo, ...)

/*********** Funcion que elimina comentarios ****************/
// sabesmo que los comentarios de un lenguaje de programacion se escriben con
// "//" -> y todo lo q le siga sera comentario
// /* dentro */ -> todo lo dentro sera comentario
function stripComentario(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
// usamos [^] -> negacion de vacio, lo cual puede ser lo quesea
// no usamos . en esa parte porq, aqui se puede incluir hasta saltos de linea
// cosa q el punto (.) no acepta

console.log(stripComentario("x = 1; // esto es un comentario"));
// x = 1;
console.log(stripComentario("x = 1; /*esto es un comentario*/"));
// x = 1;
console.log(stripComentario("x = 1; /*25555^^///+++*/"));
// x = 1;
console.log(stripComentario("1 /*x*/ + /*y*/ 1"));
// 1  1
// Esto es un error

/***************    Greedy   *****************/

// Esto se debe a que los operadores +, * , ?, son greddy
// Esto quiere decir que tratan de abarcar lo mas posible de la cadena
// para evitar este comportamiento pondemos ? despues del operador y
// se cambia a nogreedy y busca los caracteres de menor tamaño posible
function stripComentarioNoGredi(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log(stripComentarioNoGredi("1 /*x*/ + /*y*/ 1"));
// 1 + 1 -> ahora si esta correcto
// Ojo: AL usar operadores de repeticion concidera el nongreedy primero
// podras evitar bugs no intencionados

/**************** Creando objetos RegExp Dinamicamente ********************/

// Aveces no sabremos con exactitud el patron que quieres hacer match
// Lo que podemos hacer es craer una varaible con el patron abuscar y
// mediante una instancia a RegExp() -> le pasamos este patron

let nombre = "harry"; // -> patron a buscar
let texto = "Harry es el mejor mago";
let regexp = new RegExp(`\\b(${nombre})\\b`, "gi"); // -> como no usamos / / para la expresion regular \b se usa como -> \\b
// El contructor recive la exresion regular de busqueda y los paramtros de busqueda
// en este caso g-> busqueda globa, i-> insesitive Case (no le imporata las mayusculas o minusculas)
// Usemos texto -> para hacer match con nombre y agregarle _nombre_
console.log(texto.replace(regexp, "_$1_"));
// > _Harry_ es el mejor mago
nombre = "mago";
console.log(texto.replace(regexp, "_$1_"));

/************ IndexOf() vs search() *********/

// no podemos usar Expresiones regulares en IndexOf, pero podemos usar search
// search, retornara -1 si no ahi match o el indice del primer match

console.log("   world".search(/\S/)); // -> busca caracter que no sea espacio
// > 3 -> contando de 0 a 3, la cuarta posicion hace el primer match

console.log("   ".search(/\S/)); // -> busca caracter que no sea espacio
// > -1 no encuentra el match

// source method

let regx = /\d+/;
console.log(regx.source); // -> retorna la expresion regular como string
// > \d+

// lastIndex
// el metodo search no tiene la carateristica de IndexOf
// poder tener un punto de partida de busqueda IndesOf("a",2)-> busca desde la posicion 2 en adelante
// pero exiate lastIndex, el cual nos da una posicion del cual empezar a buscar
let patron = /y/g;
patron.lastIndex = 3; // busca el match desde el index 3 en adelante del string
let match = patron.exec("xyzzy");
console.log(match.index);
// > 4
console.log(patron.lastIndex);
// >5
// Por defecto lastIndex toma la posicion siguiente al ultimo match
// en caso de que no se encuentre un match lastIndex tomar 0 (cero)

/* Sticky*/
let global = /abc/g;
console.log(global.exec("xyz abc"));
// >["abc"]
let sticky = /abc/y;
// sticky aceptara el match solo cuando el lastIndex este en la posicion del patron
console.log(sticky.lastIndex); // -> 0
// esto esta apuntando a "x" -> encuentra x, por lo cual no hace match con abc
console.log(sticky.exec("xyz abc"));
// > null
// Como hariamos que funcione?
// cambiemos el lasstIndex manualmente
sticky.lastIndex = 4;
console.log(sticky.exec("xyz abc"));
// > [ 'abc', index: 4, input: 'xyz abc', groups: undefined ]

// OJO, si usamos varias veces exec() en un patron global, esto actualiza automaticamnte
// el lastIndex, por lo cual la busqueda puede generar errores
let num = /\d+/g;
console.log(num.exec("aqui el num: 1"));
// >[ '1', index: 13, input: 'aqui el num: 1', groups: undefined ]
console.log(num.exec("y ahora: 2"));
// null

// Tener cuidado cuando se usa un patron de manera global

/***************  match() method *************************/

//cuando definimos un patron de manera global, el match retornara un array con  todos las coincidencias
console.log("banana".match(/an/g));
// > ["an", "an"]

/********** Bucles para todos los matchs *****************/

// podemos aprovechar el comportamiento de un patron glogal
// mediante el uso del lastIndex

let input = "A string with 3 numbers in it ... 42 and 88";
let number = /\d+/g;
let match;
while ((match = number.exec(input))) {
  console.log(`Numero encontrado: ${match[0]} en ${match.index}`);
}
// > Numero encontrado: 3 en 14
// > Numero encontrado: 42 en 34
// > Numero encontrado: 88 en 41

// vemos que el lastIndex se ira incrementando hasta que llegue el momento que sobre pase
// el tamaño del string, en ese caso retornara null y terminara el bucle
// y lastIndex se pondra en 0 cero

/********* split with Regex ***************/

let word = "Hola'1'a'3'todos'6'como'7'estan";
console.log(word.split(/\'\d+\'/));
//> [ 'Hola', 'a', 'todos', 'como', 'estan' ]
