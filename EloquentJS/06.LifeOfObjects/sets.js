// Conjunto de valores sin duplicado

const carrito = new Set();

carrito.add("Camisa");

console.log(carrito.size); // tamaño del set

// .has -> si existe un elemento en el set

console.log(carrito.has("Camisa"));

// para borrar se puede usar .delete(name)
// para borrar todo usamos .clear()

// los set son iterables

carrito.forEach((elemento) => {
  console.log(elemento);
});

// Ejemplo -> Elimina los duplicados en el siguiete array
const numeros = [10, 20, 30, 40, 50, 10, 20];
const noDuplicados = new Set(numeros);

console.log(noDuplicados);

// existe otro tipo de dato q es el weakSet
// solo recibe informacion del tipo objeto
// no admite .size y no es iterable
