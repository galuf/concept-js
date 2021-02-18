// Array methods

const meses = ["enero", "febrero", "marzo", "Abril", "mayo"];
const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
];

//comprobar si un valor existe en el arreglo
meses.forEach((valor) => {
  if (valor === "enero") console.log("Enero si existe");
});

// .INCLUDES y .SOME
const resultado = meses.includes("enero"); // metodo include -> retorna TRUE or FALSE
// en el caso de un array de objetos se puede usar .some
const existe = carrito.some((produc) => produc.nombre === "Audifonos");
// retornara TRUE or FALSE

// Encontrar una posiion findIndex
meses.forEach((mes, i) => {
  if (mes === "Abril") console.log(`Encontrado en el indice ${i}`);
});
//Usando Metodo findIndex
const indice = meses.findIndex((mes) => mes === "Abril");
console.log(indice);
//en caso que no se encuentre el elemento, retorna -1

//como calcula el precio total a pagar en el objeto carrito
let total = 0;
carrito.forEach((prod) => (total += prod.precio));
console.log(total);

// Usando Reduce
let resultado1 = carrito.reduce((total, prod) => total + prod.precio, 0);
console.log(resultado1);

//filtrando valores
// traer todos los valores con precios mayores a 100
let productos = carrito.filter((producto) => producto.precio > 100);
console.log(productos);

//Find -> retorna el primer elemeto que cumpla con lo que se este buscando
let tablet = carrito.find((p) => p.nombre === "Tablet");
console.log(tablet); // en caso que quieras mas elementos usa Filter

// Every
// todos los elementos de un array deberan cumplir la codicion para que sea TRUE
// en caso contrario en FALSE
const b = carrito.every((p) => p.precio <= 500);
console.log(b);
