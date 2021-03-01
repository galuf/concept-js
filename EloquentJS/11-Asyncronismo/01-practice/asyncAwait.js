//const fetch = require("node-fetch");

function getNombre(username) {
  const url = `https://api.github.com/users/${username}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

getNombre("rikitan");

// Ahora usando async Await

async function getNombre2(username) {
  const url = `https://api.github.com/users/${username}`;
  const res = await fetch(url);
  const json = await res.json();

  if (res.status !== 200) throw Error("El usuario no existe");

  return json.type;
}

getNombre2("rikitan")
  .then((nombre) => {
    console.log(`El tipo del usuario es: ${nombre}`);
  })
  .catch((e) => console.log(`Huvo un error: ${e}`));

// No escribir nada de promesas

(async function () {
  try {
    const tipo = await getNombre2("rikitan");
    console.log(tipo);
  } catch (e) {
    console.log(`Hubo un error ${e}`);
  }
})();
