// lsa funciones son bloques de codigo reusable

// Existen dos formas de crear nuestras funciones

// 1._  Funcion declaration -> funciones decalradas
hola(); // llamamos a la funcion antes de ser declarada
function hola() {
  console.log("Hola mucho gusto");
}
// este tipo de funciones son hoistiadas, esto es que pueden sera llamadas en cualquier
// parte del codigo (ya sea antes o despues de ser declarada)

// 2._ Funciones expresion -> funciones expresadas
const saludo = () => {
  console.log("Hola desde function expresion");
};
saludo(); // -> Para este caso solo se debe usar la funcion despues de ser creada
// si se usa antes retornanra un error, de no declaracion
