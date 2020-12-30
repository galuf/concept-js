const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

// tener en cuenta que la fucion anonima hace referencia a window
btnFlotante.addEventListener("click", () => {
  if (footer.classList.contains("activo")) {
    footer.classList.remove("activo");
    btnFlotante.classList.remove("activo");
  } else {
    console.log(this);
    footer.classList.add("activo");
    btnFlotante.classList.add("activo");
    //this.classList.add("activo"); // this hace referencia a window (una instancia superior)
  }
});

// si usamos una funcion normal, la referencia estara en el elemento que hiso la llamada
// por lo cual this apunta a btnFlotante
btnFlotante.addEventListener("click", function () {
  if (footer.classList.contains("activo")) {
    footer.classList.remove("activo");
    this.classList.remove("activo");
    this.textContent = "Idioma y Moneda";
  } else {
    console.log(this);
    footer.classList.add("activo");
    this.classList.add("activo"); // this hace referencia a btnFlotante
    this.textContent = "X cerrar";
  }
});
