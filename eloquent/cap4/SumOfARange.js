
const range = (start,end,step=1)=>{
  let array = []

  if(step > 0) {
    for(let i=start;i<=end;i+=step) array.push(i)
  }
  else {
    for(let i=start;i>=end;i+=step) array.push(i)
  }
  return array
}

const sum = (nums)=>{
  let suma = 0
  for(let num of nums){
    suma += num
  }
  return suma
}

console.log(range(1,10,2))
console.log(range(5,2,-1))

console.log(sum(range(1,10)))