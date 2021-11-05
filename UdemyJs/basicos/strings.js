//Definimos una cadena de texto
const productos = "Monitor de 20 pulgadas";

//La propiedad mas basica es length -> para obtener el tamaño de la cadena (# de caracteres)
console.log(productos.length);

// Metodo para buscar porsiones de caracteres:
console.log(productos.indexOf("Monitor")); // retorna la posicion donde ese encuentra o -1 en caso contraio
console.log(productos.includes("pulgadas")); //retorna cerdadero o falso

//Para eliminar espacios en la cadena usaremos trimStart(), trimEnd(), trim()
console.log(productos.trimStart("   pulgadas")); //borra los espacios al inicio
console.log(productos.trimEnd("pulgadas    ")); //borra los espacios al final
console.log(productos.includes("  pulgadas   ")); //borra los espacios al final e inicio

//Modificar y cortar una cadena:
console.log(productos.replace("pulgadas", '"')); //reemplaza la el primer parametro por el segundo
console.log(productos); //el valor de productos no se muta por lo cual se puede crear otra cadena "productos2"

//Para cortar usamos slice():
console.log(productos.slice(0, 12)); //corta de la posicion [0,12> no incluye el ultimo

//metodo alternativo a slice -> substring():
console.log(productos.substring(2, 1)); //Igual q slice pero si se pasa un orden mal, este metodo lo cambia automaticamente

//Metodo repeat:
const texto = "en Promocion".repeat(3); //repite 3 veces, si pones decimal el numero de redondea

//Metodo Split():
const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" ")); // Genera un array, donde cada elmento sera separadao por el " "
console.log(actividad.split("")); // si no indicamos separacio, cada caracter se vuelve un elemento del array

//Xonvertir a mayusculas y minusculas
console.log(productos.toUpperCase()); //A mayusculas
console.log(productos.toLowerCase()); //A minusculas
