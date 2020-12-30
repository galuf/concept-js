// Traversin de DOM - Recorrer el DOM

// del Padre a los hijos -> Children

// const navegacion = document.querySelector(".navegacion");
// console.log(navegacion);
// console.log(navegacion.childNodes); // tambien a los espacios como nodos
// console.log(navegacion.children); // Lista solo a los elementos con tag <> </> podemos manejarlo como un array

const card = document.querySelector(".card");

//console.log(card.children[1].children); // mostrara a los elementos dentro de card (hijos)

// del Hijo al padre -> parentElement
//console.log(card.parentElement); // subira hasta su contenedor (padre)

// entre hermanos
//console.log(card.nextElementSibling); //se movera con sus hermanos de nivel en next ->
//console.log(card.nextElementSibling.nextElementSibling);

const lasCard = document.querySelector(".card:nth-child(4)");
console.log(lasCard.previousElementSibling); // elemento hermano previo <-
