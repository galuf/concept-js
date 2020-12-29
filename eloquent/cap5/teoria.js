function repetir(n,action){
  for(let i=0;i<n;i++){
    action(i)
  }
}

repetir(3,console.log)

let etiquetas=[]

repetir(5,i=>{
  etiquetas.push(`Unit ${i+1}`)
})

console.log(etiquetas)

// Higher Order Funcition
// funcion que crea nuevas fuciones

function mayorQ(n){
  return m=>m>n
}

let mayorQ10 = mayorQ(10)

console.log(mayorQ10(11))

// forEach

array = [1,2,3,4,5,6,7,8,9]

array.forEach(element => {
  if(element%2==0)
   console.log(element)
});

// Filter
let newArr = array.filter(element => element%2==0)
console.log(newArr)

// Map
let mapa = array.map(element=> element*2 )
console.log(mapa)

// Reduce
let mayor = array.reduce((a,b)=> a>b?a:b)
console.log(mayor)

//Diferencia entre ForEach y map, es que map crea un nuevo arreglo (en el ejemplo anterior "mapa")
// mientras que ForEach simple mente hace un recorrido del array.