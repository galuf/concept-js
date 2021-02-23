let arrays = [[1, 2, 3], [4, 5], [6]];

let flater = arrays.reduce((vector,actual)=>vector.concat(actual),[])

console.log(flater)

let n = arrays.concat([1,2,3,4])
console.log(n)