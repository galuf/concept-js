let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(
  text.replace(/(^(\')|\W(\')).+?((\')\W|(\')$)/g, (match) => {
    let inicio = 1;
    let fin = match.length - 1;
    let cadena = "";
    if (match[0] == " ") {
      inicio++;
      cadena += " ";
    }
    if (match[fin] == " ") {
      fin--;
      cadena += `"${match.slice(inicio, fin)}" `;
    } else {
      cadena += `"${match.slice(inicio, fin)}"`;
    }
    return cadena;
  })
);

// → "I'm the cook," he said, "it's my job."
