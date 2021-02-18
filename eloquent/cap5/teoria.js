function repetir(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repetir(3, console.log);

let etiquetas = [];

repetir(5, (i) => {
  etiquetas.push(`Unit ${i + 1}`);
});

console.log(etiquetas);

// Higher Order Funcition
// funcion que crea nuevas fuciones

function mayorQ(n) {
  return (m) => m > n;
}

let mayorQ10 = mayorQ(10);

console.log(mayorQ10(11));

// forEach

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

array.forEach((element) => {
  if (element % 2 == 0) console.log(element);
});

// Filter
let newArr = array.filter((element) => element % 2 == 0);
console.log(newArr);

// Map
let mapa = array.map((element) => element * 2);
console.log(mapa);

// Reduce
let mayor = array.reduce((a, b) => (a > b ? a : b));
console.log(mayor);

//Diferencia entre ForEach y map, es que map crea un nuevo arreglo (en el ejemplo anterior "mapa")
// mientras que ForEach simple mente hace un recorrido del array.

// usar for - of

const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar"];

// for of itera mejor sobre arreglos
for (let pendiente of pendientes) {
  console.log(pendiente);
}
// lista: Tarea Comer Proyecto Estudiar
for (let pendiente in pendientes) console.log(pendiente);
// si usaramos "in" en vez de "of" obtendriamos 0 1 2 3

//esto es debido a que la utilidad de "in" se da mejor en objetos
const automovil = {
  modelo: "Camaro",
  year: 1969,
  motor: "6.0",
};

for (let propiedad in automovil) console.log(propiedad);
// por defecto itera sobre los keys

// pero podemos pasarle mas valores de iteracion usando of
for (let [propiedad, valor] of Object.entries(automovil)) {
  console.log(`${propiedad} -> ${valor}`);
}
