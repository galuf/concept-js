const usuarios = [
  { id: 1, nombre: "ricardo", prefesion_id: 1 },
  { id: 2, nombre: "alejandro", prefesion_id: 1 },
  { id: 3, nombre: "diego", prefesion_id: 2 },
];

const profesion = {
  1: "Programador",
  2: "diseñador",
};

function getUsuarios() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(usuarios);
    }, 200);
  });
}

function getUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(usuarios.filter((user) => user.id === id)[0]);
    }, 200);
  });
}

function getProfesion(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(profesion[id]);
    }, 200);
  });
}

getUsuarios().then((usuarios) => console.log(usuarios));

getUsuario(1).then((usuario) => console.log(usuario));

getProfesion(1).then((prof) => console.log(prof));

function UserProfesion(id) {
  return getUsuario(id).then((user) => getProfesion(user.prefesion_id));
}

UserProfesion(1).then((profesion) => console.log(profesion));
UserProfesion(2).then((profesion) => console.log(profesion));
UserProfesion(3).then((profesion) => console.log(profesion));

/****************** Promise.all() ************************/

// Imaginemos q queremos pedir todas las profesiones
getProfesion(1)
  .then((profesion) => console.log(profesion))
  .then(() => getProfesion(2))
  .then((profesion) => console.log(profesion));

// Esto funciona, pero tardara 400ms, tiempo que no es requerido debido a que getprofesion 1 no depende de getProfesion 2
// para solucionar esto podemos usar Promise.all()

Promise.all([getProfesion(1), getProfesion(2)]).then((res) => console.log(res));
// se retorna un array con los resultados de cada getProfesion
// el timpo q demora esto sera de 200ms
