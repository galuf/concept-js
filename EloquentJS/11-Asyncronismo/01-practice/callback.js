const usuarios = [
  { id: 1, nombre: "ricardo", prefesion_id: 1 },
  { id: 2, nombre: "alejandro", prefesion_id: 1 },
  { id: 3, nombre: "diego", prefesion_id: 2 },
];

const profesion = {
  1: "Programador",
  2: "diseñador",
};

function getUsuarios(callback) {
  setTimeout(() => {
    callback(null, usuarios);
  }, 200);
}

function getUsuario(id, callback) {
  setTimeout(() => {
    callback(null, usuarios.filter((user) => user.id === id)[0]);
  }, 200);
}

function getProfesion(id, callback) {
  setTimeout(() => {
    callback(null, profesion[id]);
  }, 200);
}

getUsuarios((err, usuarios) => console.log(usuarios));

getUsuario(1, (err, user) => console.log(user));

getProfesion(1, (err, prof) => console.log(prof));

function UserProfesion(id, callback) {
  getUsuario(id, (err, user) => {
    getProfesion(user.prefesion_id, (err, profesion) =>
      callback(null, profesion)
    );
  });
}

UserProfesion(3, (err, profesion) => console.log(profesion));
