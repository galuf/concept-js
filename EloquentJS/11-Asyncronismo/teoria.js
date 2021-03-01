/************** Asyncronismo ********************/

// cuando llamamos a una funcion, esta retornara o finalizara, cunado realice todo su proceso
// esto detiene el programa hasta q se complete la funcion
// el asincronismo permite que multiples cosas pasen en el mismo tiempo, pero no confundir esto
// con el paralelismo, mas bien JS seria asincrono y concurrente

// Diferencias entre un codigo sincrono y asincrono
// Sincrono -> Podemos pensar en una cola para el cine, se avanza uno por uno a la vez

// Asincrono-> Podemos pensarlo como la orden a un mesero en un restaurante,
// las ordenes se entregaran cuando esten listas, no importa quien pidio primero
// sino cual orden se realiza primero para ser entregado

// Event Loop -> es la pieza fundamental que coordina la ejecucion, eventos y callbacks
// Esto es sl cilo de enventos, consiste de:
// Call stack -> Orden de ejecucion, muestra q fucion se esta ejecutando, q funcion la llamo.
// web Apis -> hacen las llamadas http, retornanado datos a un callback
// callback queue -> cola de calback en caso de q el event loop este ocupado

//Simulando el funcionamiento del siguiente codigo
// Ejm 1
console.log("Hola");
// -> como es un cogigo sencillo, entra directamente al call stack y se ejecuta
// -> si tuvieramos mas de estos mensajes, se esperarian uno a uno hasta q el callstack termine

// Ejm 2
function uno() {
  dos();
}
function dos() {
  console.log("Estoy aca");
}
uno();

// De manera similar aqui solo trabajara el call stack
// 1. entra uno()
// 2. entra dos()
// 3. ejecuta "Estoy aca" y sale
// 4. sale dos()
// 5. sale uno()

// -> los ejemplos anteriores eran sincronos, veamos algo asincrono
// Ejm 3

setTimeout(() => {
  console.log("Me tarde 2 s");
}, 2000);
console.log("Ejecutado");
// La funcion setTimeout recive un callback la cual ejecutara en 2 segundos
// Ejecucion:
// la funcion setTimeOut entra al "callstack",
// una ves dentro manda al callback hacia el "web api", el cual esperara 2s
// debido a que el "callstack" ya se vacio, porque envio la funcion a "web api"
// recibe ahora al console.log("ejecutando") y lo muestra en pantalla
// cuando el "web api" termina los 2s manda al callback a la seccion "callback queue"
// si el "callstack" esta vacio, el "callback queue" enviara al callback al "callstack"
// en caso contrario esperara hasta q se vacie
// ya en el "callstack" la funcion se ejecuta e imprime "Me tarde 2s"
// > Ejecutado
// > Me tarde 2s

//>>>>>> Para visualisar esto graficamente podemos usar la herramienta web "loupe"
