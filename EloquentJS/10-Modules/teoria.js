/*************** Modulos en JS ********************/

// Un programa ideal de JS, debe tener una structura clara
// Esto hara que sea facil de entender y manejar en equipo

// los modulos nos servira para abstraer y reutilizar partes de codigo
// si existe un erros, arreglamos el modulo, y todos los archivos que
// usen este modulo ya funcionaran correctamente, esto no seria asi en caso de que
// copiemos ese modulo com funcion, tendriamos que arreglar cada uno de los
// archivos que contiene esta funcion, esto serie muy tedioso

// Paquetes son un fragmento de codigo, que se puede distribuir e instalar
// en JS la insfrectuctura la proporciona NPM

// NPM nos permite cargar paquetes y nos ayuda a instalarlo y administrarlo
// Tambien encontraresmo NodeJS

// NPM posee mas de medio millon de paquetes, la mayoria no sirven de mucho
// pero los utiles, poseen licenci libre o de contribucion, lo cual es bueno para
// la comunidad de JS

// Ejemplo de uso de un paquete
// Archivo -> format-date.js

// const { formatDate } = require("./format-date"); // Llamamos al paquete

// console.log(formatDate(new Date(2017, 9, 13), "dddd the Do"));
// → Friday the 13th

// Importemos de los archivos person.js y utility.js

// import person from "./person";
// import prs from "./person";

// import { baseData } from "./utility";
// import { clean } from "./utility";

//import { hola } from "./hola";
const hola = require("./hola");
hola();
