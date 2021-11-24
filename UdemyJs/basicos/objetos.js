const nombre = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

const producto = {
  nombre1: nombre,
  precio,
  disponible,
};

console.log(producto);

//Como acceder a los valore de un objeto:
console.log(producto.nombre);
console.log(producto["nombre"]);

//Como agragar y eliminar propiedades de un objeto:
producto.imagen = "imagen.png";
console.log(producto);

delete producto.disponible;
console.log(producto);

//Destructuring
const { nombre1 } = producto;
console.log(nombre);

//Objetos anidados
const producto2 = {
  nombre1: nombre,
  precio,
  disponible,
  info: {
    stock: 0,
    proveedor: "Juan Perez",
  },
};

const {
  info: { stock },
} = producto2;

console.log(stock);

//Como hacer no modificable un objeto?

// Object.freeze(nombre_objeto) -> congela el objeto (solo lectura)
// Object.seal(nombre_objeto) -> sella el objeto no puedes agragar ni borrar las propiedades, las que ya ahi si se pueden modificar

// Para saber si estan sellados o congelados usamos:
// Object.isFrozen(nombre_objeto);
// Object.isSealed(nombre_objeto);

// Unir 2 Objetos:
const prod = {
  nombre: "Taco",
  precio: 2,
  disponible: true,
};

const medidas = {
  peso: "1kg",
  medidas: "1m",
};

const resultado = Object.assign(prod, medidas);
const res_spreed = { ...prod, ...medidas };
//Ambas operaciones dan lo mismo

console.log(resultado);
console.log(res_spreed);
