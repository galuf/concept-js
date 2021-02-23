// Teoria Estructura de datos
// Objetos y Arrays

let numeros = [2,3,4,5,6];
console.log(numeros);

// ***** Propiedades *****
console.log("Propiedades")
// Como vimos anteoriomente existen propiedades como .length y .max
// casi todas las variables tiene este tipo de propiedades excepto
// null y undefinded

// console.log(null.length) -> nos genera un error

// Podemos acceder a los propiedades en Js mediante [] o el . (punto)
// value.x o value[x] depende de la especificacion, ya se de un index o 
// algun nombre de propidad -> value.color o value[0]

console.log(`Usando propiedad length : ${numeros["length"]}`) // se puede usar asi pero es mas facil
// numeros.length

// ***** Metodos *****
console.log("Metodos")
// Propiedades en forma de funcion son Metodos
// toUpperCase() es un metodo de una cadena

let cad = "hola a todos";
console.log(`Cadena Metodo : ${cad}`)
console.log(`Usando Metodo toUpperCase() : ${cad.toUpperCase()}`)

// Metodos para arrays

// push(valor) -> agrega valor a la ultima posicion del array (retorna la cantidad de elementos resultantes)
// pop() -> quita y retorna el ultimo valor del array aplicado
// shift() -> quita y retorna el elemento inicial del array
// unshift() -> incrementa un elemento al inicio del array (retorna la cantidad de elementos resultantes)
// indexOf(elemento) -> retorna el primer index encontrado al elemento
// lastIndexOf(elemento) -> retorn el ultimo index encontrado al elemento
// slice(a,b) -> carta en el rango [a,b> y lo retorna
// slice(a) -> corta desde a hasta el final
// slice sirve para  cortar un sub array sin modificar el original
// concat(sub-array) -> concatena

// ***** Objetos *****
console.log("Objetos")
let dia1 = {
  ardilla : false,
  eventos : ["work","touched tree","pizza","running"]
}

// para Acceder a este objeto usamos sus propiedades por punto

console.log(`Se convirtio en ardilla: ${dia1.ardilla}`)
console.log(`Rutina del dia: ${dia1.eventos}`)

// que pasa si accedemos a una propiedad que no existe?

console.log(`Accediendo a .lobo: ${dia1.lobo}`)
// nos retorna undefined, peros si queremos que exista lo asignamos
// directamente con = y existira: dia1.lobo = false

// para saber si existe una propiedad en el objeto usamos "in"
console.log(`Existe la propiedad ardilla en dia1: ${"ardilla" in dia1}`)
console.log(`Existe la propiedad pato en dia1: ${"pato" in dia1}`)

// para eliminar una propiedad usamos delete
console.log("Eliminando la propiedad ardilla de dia1")
delete dia1.ardilla
console.log(`Existe la propiedad ardilla en dia1: ${"ardilla" in dia1}`)

// para saber las propiedades o keys de un objeto directamente
// usamos Object.keys(objeto)
dia1.ardilla = false
console.log(`Claves del Objeto dia1: ${Object.keys(dia1)}`)

// para saber los valores de un objeto directamente
// usamos Object.values(objeto)
console.log(`Valores del Objeto dia1: ${Object.values(dia1)}`)


a = [1,2,3,4,5]

num = a.push(0)
num2 = a.unshift(10)

console.log(`push ${num}, para unshift ${num2}`)

// ***** JSON *****
console.log("Json")

// Js objetc notations
obj = {nombre:"Alex", edad:12}

console.log(obj)

// los objetos Json tienen las propiedades en "" (comillas)

string = JSON.stringify(obj)
console.log(string)

objJson = JSON.parse(string)
console.log(objJson)

let array = [{"hola":1}]

string2 = JSON.stringify(array)

obj2 = JSON.parse(string2)

console.log(obj2[0])