// Iniciando con local storage
// Api sencilla inicia con llave - valor

// Local storage Vs Sesion Storage
// local Storage -> Datos mas persistentes, aun cerrando el navegador los datos persisten
// Sesion Storage -> los datos se almacenas por sesion, si cerrarmos el mavegador se pierde la informacion almacenada

/**************************     Local Storage       */

/****** 1-  Agregar elementos:   */

//Para agreagar elemetos usanmos localStorage.setItem(key, value)
localStorage.setItem("nombre", "Alex");

// Local storage solo almacena string, si pasamos numeros estos seran transformados a strings
// Pero podemos trabajar con objetos de la siguiente forma:
const producto = {
  nombre: "Monitor de 24 Pulgadas",
  presio: 300,
};

// convertimos el objeto a string con JSON.stringify()
const productoString = JSON.stringify(producto);
//ahora los agregamos al local storage
localStorage.setItem("producto", productoString);

// Trabajemso con arreglos
const meses = ["enero", "febrero", "marzo", "abril"];
const mesesString = JSON.stringify(meses);
localStorage.setItem("meses", mesesString);

/****** 2-  Obtener elementos:   */

// para obtener un valor usamos localStorage.getItem(key) -> esto retorna un string

const miNombre = localStorage.getItem("nombre");
console.log(miNombre);
// > Alex
// en caso de que no exista el valor (key) -> se retorna un "null"

// Ahora llamemos a un objeto
const productoJson = localStorage.getItem("producto");
console.log(JSON.parse(productoJson));
// > Nos retorna un objeto {}
// OJO -> JSON.parse transformara los strings q tengans el formato correcto

// Ahroa llamemos a el array

const mesesArray = JSON.parse(localStorage.getItem("meses"));
console.log(mesesArray);

mesesArray.forEach((element) => {
  console.log(element);
});

/****** 3-  Eliminar y Actualizar elementos del Local Storage:   */

// para obtener un valor usamos localStorage.removeItem(key)
localStorage.removeItem("nombre");

// No existe un metodo propio de localStorage para actuaizar, asiq simplemente reescribimos
// con setItem()

// Agreguemos un mes mas a meses que esta en local storage
const newMeses = JSON.parse(localStorage.getItem("meses"));
console.log(newMeses);
//>  ["enero", "febrero", "marzo", "abril"]
newMeses.push("mayo");
console.log(newMeses);
//>  ["enero", "febrero", "marzo", "abril", "mayo"]

// Ahora reescribimos esto en el local estorage
const newMesesString = JSON.stringify(newMeses);
localStorage.setItem("meses", newMesesString);

/****** 4-  Limpiar todo el local Storage */

// para limpiar todo el local storage usamos localStorage.clear()

localStorage.clear();
// con esto borramos todo lo q haya en el localStorage
