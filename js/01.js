// uso de This con implicit binding

const Usuario = {
  nombre: "Alex",
  edad: 24,
  presentacion() {
    //de esta forma no funciona, se debe usar el this
    //console.log(`Mi nombre es ${nombre} y tengo ${edad}`)

    //el this nos dice en que contexto se ejecuta o se accede a esos valores (nombre,edad)
    //el this en este caso hace referencia al objeto Usuario
    console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`);
  },
  //this tambien es una forma de referirse a que objeto se hace referencia cuando se
  //utilice una funcion o un metodo, cuando se ejecuten, como en este caso
  mascota: {
    nombre: "Hook",
    edad: 1,
    presentacion() {
      console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`);
      // esto imprimira a nombre = Hook y a edad = 1
    },
  },
};

Usuario.presentacion();
Usuario.mascota.presentacion();
