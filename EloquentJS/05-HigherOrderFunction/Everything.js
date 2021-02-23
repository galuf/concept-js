
function every(array, test) {
  let estado = true
  for(let element of array){
    estado = estado && test(element)
  }
  return estado
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true