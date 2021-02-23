function isEven(numero){
  if(numero == 0)
    return true
  else if(numero == 1)
    return false
  else if(numero < 0)
    return isEven(-numero)
  else {
    return isEven(numero-2)
  }
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))