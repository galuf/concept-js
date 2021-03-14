const listaTwits = document.getElementById("lista-twits");

const mitwit = document.getElementById("mitwit");

const boton = document.getElementById("publicar");

document.addEventListener("DOMContentLoaded", function () {
  muestraTwits(getTwits());
  borrar();
});

boton.addEventListener("click", () => {
  const lista = getTwits();
  lista.push(mitwit.value);
  localStorage.setItem("mistwits", JSON.stringify(lista));
  muestraTwits(getTwits());
  listaTwits.value = "";
  borrar();
});

function borrar() {
  const eliminar = document.querySelectorAll(".eliminar");
  //console.log(eliminar);
  eliminar.forEach((e) => {
    e.addEventListener("click", () => {
      const lista = getTwits();
      const newLista = lista.filter(
        (ele) => ele !== e.previousElementSibling.textContent
      );
      localStorage.setItem("mistwits", JSON.stringify(newLista));
      muestraTwits(getTwits());
      borrar();
    });
  });
}

function getTwits() {
  const misTwits = localStorage.getItem("mistwits")
    ? JSON.parse(localStorage.getItem("mistwits"))
    : [];
  return misTwits;
}

function crearTwit() {}

function muestraTwits(twits) {
  let newTwits = "";
  twits.forEach((element) => {
    newTwits += `
      <div class='e-twit'>
        <p>${element}</p>
        <span class="eliminar">X</span>
      </div>
    `;
  });
  listaTwits.innerHTML = newTwits;
}

//muestraTwits(misTwits);
