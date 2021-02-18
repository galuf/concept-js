/* --------------- Variables ---------------*/

// Tipos de variables promitivos no mutables

let nombre = "Alex";
var apellido = "Flores";
const edad = 23;

/* Diferencias: let -> existe en un scope, fuere de este ya no existe
                var -> En des uso, es una variable global
                const -> variable con valor constante. esto significa que no se puede reasignar
                      -> tener en cuenta que para variables del tipo mutable declarado con const
                      -> si se puede modificar Ejm: const a = [] -> a.push(1) estamos mutando el array
*/

// Scope -> Referencia donde una variable va a vivir
function Saluda() {
  const saludo = "Hola";
  // Variable saluda, pertenece al scope de la funcion Saluda, solo existe aqui
  console.log(saludo);
}

Saluda(); // "Hola"
//No podemos hacer uso de 'saludo'

/* --------------- Numeros Especiales ---------------*/

// Existe 3 numeros especiales, estos son:
let num1 = Infinity;
let num2 = -Infinity;
let num3 = NaN; // Resultado de Operaciones del tipo 0/0 o Infinito - Infinito

/* --------------- Template Literal ---------------*/

// Nos permite hacer concatenaciones de manera mas sencilla
let person = "Adulto";
let nombre2 = "Alex";
console.log(`Esto es un Template Literal, Hola soy ${nombre2} y soy ${person}`);
// Esto es un Template Literal, Hola soy Alex y soy Adulto

/* --------------- Operador Unario ---------------*/

// Para saber el tipo de dato de una variable podemos usar: typeof
nombre = "Juan";
console.log(typeof nombre);
//string

/* --------------- Valores Vacios Empty ---------------*/

// null y undefined -> denota desconocimiento de un valor
let variable;
console.log(variable);
// undefined

/* --------------- Conversion Automatica ---------------*/
// 1 + "1" retorna "11"
// "5" - 1 retorna 4
// "five"*2 retorna NaN
// false == 0 retorna True
// Existe una conversion automatica para los valores de texto, numerico y Booleano

/* --------------- Asignacion logica ---------------*/

// El operador || asignara el valor de la derecha cuando la conversion de este sea false en caso contrario tomara el valor de la izquierda
nombre = null || "Pepe";
// Tener en cuenta : Boolean(null) == Boolean(NaN) == Boolean(undefined) == 0 == "" == False
console.log(nombre);
//"Pepe"

// EL operador && asigna el valor de la derecha, siempre y cuando el valor de la izquierda sea TRUE
nombre = true && "Alex";
// dado que el valor de la izquierda es true, nombre toma el valor de Alex
nombre = NaN && "Juan";
// como la conversion de NaN es false, nombre toma el valor de NaN, no tomo "Juan"

/* --------------- INmutabilidad de Datos Primitivos ---------------*/

let cadena = "hola mucho gusto";
cadena.toUpperCase();
console.log(cadena); // -> hola mucho gusto
// Los metodos de un string devuelven un nuevo string
//esto es debido aque los string son inmutables
let newCadena = cadena.toUpperCase(cadena);
console.log(newCadena); // -> HOLA MUCHO GUSTO
