// Modificando el css con JS

const encabezado = document.querySelector("h1");

// encabezado.style.backgroundColor = "red";
// encabezado.style.fontFamily = "Arial";
// encabezado.style.textTransform = "uppercase";

const card = document.querySelector(".card");
card.classList.add("nueva-clase", "segunda-clase");
console.log(card.classList);
card.classList.remove("card");
console.log(card.classList);
