let encabezado = document.querySelector(".contenido-hero h1");
console.log(encabezado);

//modificar el texto
console.log(encabezado.innerText); // le afecta el css
console.log(encabezado.textContent);
console.log(encabezado.innerHTML); // se trae hasta etiquetas html

//modificando
encabezado.innerText = "Nuevo Heding";

//modificando imagen
const imagen = document.querySelector(".card img");

imagen.src = "img/hacer2.jpg";
