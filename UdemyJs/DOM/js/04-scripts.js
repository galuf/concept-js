// query selector similar a selectores de css
const card = document.querySelector(".card");
console.log(card);
// retorna maximo un elemento
// para id usamos punto(#) para clases usamos(.)

const cardP = document.querySelector("section.hospedaje .card:nth-child(3)");
console.log(cardP);
