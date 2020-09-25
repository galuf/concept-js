// function countBs(cadena){
//   cont = 0
//   for(let i=0;i<cadena.length;i++){
//     if(cadena[i] == "B")
//       cont++
//   }
//   return cont
// }

function countChar(cadena,c){
  cont = 0
  for(let i=0;i<cadena.length;i++){
    if(cadena[i] == c)
      cont++
  }
  return cont
}

function countBs(letra){
  return countChar(letra,"B")
}

console.log(countBs("BBBASADdfasdf"))

console.log(countChar("Caballo","C"))