// Eliminar elementos del DOM
const enlace = document.querySelector("a");
enlace.remove();

const navegacion = document.querySelector(".navegacion");
navegacion.removeChild(navegacion.children[0]);
