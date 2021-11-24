const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// Array Methods
// ----> includes() > funciona en arreglos, no funciona en objetos
const cadena = "Esto es una cadena";
console.log(cadena.includes("Esto"));
const res1 = meses.includes("Enero");
console.log(res1);

// ----> some() > similar a includes pero para un array simple y de objetos
const existe = carrito.some((producto) => producto.nombre === "Celular");
console.log(existe);
const existe2 = meses.some((mes) => mes === "Junio");
console.log(existe2);

// ----> findIndex() > Encontrar el indice de un elemeto en un array
const indice = meses.findIndex((mes) => mes === "Abril");
console.log(indice);
// en case de que se repitan elementos solo se toma el indice del primer elemento
const indiceObj = carrito.findIndex(
  (producto) => producto.nombre === "Celular"
);
console.log(indiceObj);

// ----> reduce() > unir datos, ejemplo: con los datos de carrito: cuanto es el total a pagar?
const res_total = carrito.reduce((total, actual) => total + actual.precio, 0);
console.log(res_total);

// ----> filter() > retorna un nuevo arreglo basado en el parametro
// ejmplo: traer todos los productos con precio mayor a 400
const prods = carrito.filter((producto) => producto.precio > 400);
console.log(prods);
const quitando = carrito.filter((producto) => producto.nombre !== "Audifonos");
console.log(quitando);

// ----> find() > retorn un nuevo arreglo segun la condicion
// solo obtine el primer elemnto que cumple la condicion, si hay repetiddos de ignoran
const res_find = carrito.find((producto) => producto.nombre === "Tablet");
console.log(res_find);

// ----> every() > todos deben cumplir una condicion para que retorne true
const precio_1000 = carrito.every((prod) => prod.precio < 1000);
console.log(precio_1000);
