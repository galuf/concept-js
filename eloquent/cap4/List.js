let list = {
  value:1,
  rest:{
    value:2,
    rest:{
      value:3,
      rest:null
    }
  }
}

const arrayToList = (array)=>{
  if (array.length==1){
    return {value:array[0], rest:null}
  }else{
    return {value:array[0], rest:arrayToList(array.slice(1))}
  }
}

const listToArray= (list)=>{
  if(list.rest == null){
    return [list.value]
  }else{
    return [list.value,...listToArray(list.rest)]
  }
}

const prepend = (elemento,lista)=>{
  return {value:elemento,rest:lista}
}

const nth = (lista,numero)=>{
  let array = listToArray(lista)
  if(numero < 0 || numero > array.length-1 ){
    return undefined
  }else{
    return array[numero]
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20