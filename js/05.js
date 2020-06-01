//Event Loop

console.log('1ro')
console.log('2do')
console.log('3ro')
console.log('4to')
console.log('5to')

//en este primer caso todo fluye syncronamente (uno despues de otro)
//pero js tiene funciones  asyncronas
console.log('-------------------------------------------------')


console.log('1ro')

setTimeout(()=>{
  console.log('2do')
},1000)

console.log('3ro')

setTimeout(()=>{
  console.log('4to')
},1000)

console.log('5to')

// En este caso existe un retardo por lo cual no es de sorprender
// que la ejecucion sea de esta forma 
// 1ro
// 3er
// 5to
// 2do
// 4to

//ahora veamos cuando pongamos el retarso en 0

console.log('-------------------------------------------------')


console.log('1ro')

setTimeout(()=>{
  console.log('2do')
},0)

console.log('3ro')

setTimeout(()=>{
  console.log('4to')
},0)

console.log('5to')

//vemos que el comportamiento no cambia el resultado sigue siendo
// 1ro
// 3er
// 5to
// 2do
// 4to

// esto se debe al event Loop
// empecemos analizando a la funcion setTimeOut(), esta funcion es no bloqueante
// eso significa que setTimeOut no ingresa al stack de ejecucion (pila stack)

//los que entran en el stack seran los console.log por eso primero se ejecutan
//1ro , 3er , 5to

//el setTimeOut se va a la cola de tareas (task queue) e ingresa FIFO al stack de ejecucion

//en caso de las promesas ingresan a una cola de trabajo (jobs queue) que es mas prioritaria
// por lo cual si esq existe una promesa esta se ejecutara antes de las funciones
//setTimeOut

// Buscar en youtube Philip Roberts ¿Que diablos es el event loop?

