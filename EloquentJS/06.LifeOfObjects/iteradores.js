function creaIterador(carrito){
  let i=0
  return {
    siguiente: ()=>{
      const fin = (i>=carrito.length)
      const valor = !fin ? carrito[i++]:undefined
      return {
        fin,
        valor
      }
    }
  }
}

const carrito = [1,2,3,4]

const recorreCarrito = creaIterador(carrito)

console.log(recorreCarrito.siguiente())
console.log(recorreCarrito.siguiente())
console.log(recorreCarrito.siguiente())
console.log(recorreCarrito.siguiente())
console.log(recorreCarrito.siguiente())
console.log(recorreCarrito.siguiente())