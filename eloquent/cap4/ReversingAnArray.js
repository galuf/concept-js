const reverseArray = (array)=>{
  let newArray = []
  for(let i=array.length-1;i>=0;i--){
    newArray.push(array[i])
  }
  return newArray
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

a = [1,2,3,4,5]
console.log(a)
reverseArrayInPlace(a)
console.log(a)