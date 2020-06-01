// arrow function vs function

const arrow = ()=>{console.log(this)}
function fnNormal(){
  console.log(this)
}

arrow()
fnNormal()
//en estos ejemplos el resultado es igual debido a que no existe implicit
//ni explicit binding, por lo cual en ambos casos se tomara el window binding

//Veamos otro caso en el contexto de objetos

const example1 = { // caso function 
  max : 150,
  getRamdonId: function(){
    return Math.floor(Math.random()*(this.max - 1) + 1)
  },
  getThis: function(){
    console.log(this)
  }
}

const example2 = { //caso arrow function
  max : 150,
  getRamdonId: ()=>{
    return Math.floor(Math.random()*(this.max - 1) + 1)
  },
  getThis: ()=>{
    console.log(this)
  }
}

console.log(example1.getRamdonId()) // 90
console.log(example2.getRamdonId()) //NaN

//en el caso de arrow function se obtiene un not number  ¿Porq se de esto?
//veamos el metodo getThis

console.log(example1.getThis()) //{max: 150, getRamdonId: ƒ, getThis: ƒ}
console.log(example2.getThis()) //Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}

//Con estos resultados podemos decir que la funcion definida con function
//mantiene el this en el contexto de ejecucion en este caso el objeto (example1)

//EL arrow function al contrario usa el this en el contexto de ejecucion 
//superior al del objeto por lo cual el this en esta funcion hara referencia a
//el window binding

// veamos estas funciones a nivel de callback

const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')

//agreguemos un evento a cada boton
//callback function simple
btn1.addEventListener('click',function(){
  console.log(this)
  // <button></button>
})
//callback arrow function
btn2.addEventListener('click',()=>{
  console.log(this)
  // window
})

//en funciones pasadas por callback es donde se ve la diferencia
//y utilidad de las arrow function, debido a que tomo un constexto superior
//en el ejemplo las funciones simples se mantienen en el contexto del boton
//y las arrow function salen un contexto mas afuera en este caso seria el window