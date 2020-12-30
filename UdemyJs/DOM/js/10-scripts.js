const enlace = document.createElement("a");
enlace.textContent = "Nuevo enlace";
enlace.href = "/nuevo-enlace";

console.log(enlace);

const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(enlace);
navegacion.insertBefore(enlace, navegacion.children[1]);
