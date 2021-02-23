// Metodos

let conejo = {}; // Creamos un objeto "conejo" vacio

conejo.habla = function (line) {
  // Este es un metodo del objeto conejo
  console.log(`El conejo dijo ${line}`);
};

// Prototipos
function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
  console.log(`accediendo con function ${this.nombre}`);
};

Cliente.prototype.prueba = () => {
  console.log(`accediendo con un arrow function ${this.nombre}`);
};

// Porque no usar arrow function en este prototipo?
// el function busca en el objeto actual, y el arrow function buscara en la ventana global

//instancia
const pedro = new Cliente("Pedro", 1000);
pedro.tipoCliente();
pedro.prueba();

//Notacion de Clase

class Persona {
  #codigo; // propiedad privada

  constructor(nombre, edad, codigo) {
    this.nombre = nombre;
    this.edad = edad;
    this.#codigo = codigo;
  }

  mostrarInformacion() {
    return `Persona ${this.nombre}, tu edad es de ${this.edad} de cod ${
      this.#codigo
    }`;
  }
}

const Alex = new Persona("Alex", 24, 2013);

console.log(Alex.mostrarInformacion()); // genera errores en versiones antiguas de node y algunos servidores web

// Estructura Maps
// NO confundir Map con el metodo.map (son distintos), Map es una estructura de datos
// Que relaciona un valor (key) con otro
// Esto se puede representar directamente como un objeto
let edades = {
  Boris: 39,
  Lian: 22,
  Julia: 62,
};

console.log("Alex" in edades); // Esto mostrara FALSE
console.log("toString" in edades); // Esto mostrara TRUE -> esto es un error el los objetos

// Se recomiendo usar Map para casos en los que no queramos que los Keys se transformen en string
let Edades = new Map(); // Creamos la estructura map
Edades.set("Boris", 39); // Usamos set -> para establecer un valor
Edades.set("Lian", 22);
Edades.set("Julia", 62);

console.log(Edades.get("Julia")); // Usamos get -> Para extraer un valor del Map
// usamos has -> para consultar la exitencia del key (True or False)
console.log(Edades.has("toString")); // Esto nos mostrara False
