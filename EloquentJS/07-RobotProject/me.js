// veo los resultados y lo implemento a mi manera
const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

// convertir en un objeto grafo

function convGrafo(roads) {
  let grafo = {};
  function addEdge(first, second) {
    if (grafo[first] == null) {
      grafo[first] = [second];
    } else {
      grafo[first].push(second);
    }
  }
  roads.forEach((element) => {
    let [first, second] = element.split("-");
    addEdge(first, second);
    addEdge(second, first);
  });
  return grafo;
}

const caminoGrafo = convGrafo(roads);
