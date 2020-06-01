// Window Binding

function obtenerAuto(){
  console.log(`Mi auto es color ${this.color}`)
}

const color = 'Negro'

obtenerAuto() //-> nos retorna color undefined

//en este caso no ahi referencia entre color y la funcion 
//el this de la funcion busca a color de manera implicita y explicita
//pero no lo encuentra, la siguiente forma q hara la busqueda es en el
//window en este caso no ahi nada tampoco en el window
//creemos la variable en le window para ver en resultado

window.color = 'Negro'

obtenerAuto() // -> nos retorna color Negro

//veamoslo de esta forma

function obtenerContexto(){
  console.log(this)
}

obtenerContexto() // -> nos retorna el objeto window

// conclusion : al no encontrarse un binding explicito o implicito
//el this toma el binding window