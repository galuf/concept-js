// usar for - of

const pendientes = ['Tarea','Comer','Proyecto','Estudiar']

// for of itera mejor sobre arreglos
for(let pendiente of pendientes){
  console.log(pendiente)
} 
// lista: Tarea Comer Proyecto Estudiar
for(let pendiente in pendientes) console.log(pendiente)
// si usaramos "in" en vez de "of" obtendriamos 0 1 2 3

//esto es debido a que la utilidad de "in" se da mejor en objetos
const automovil = {
  modelo : 'Camaro',
  year : 1969,
  motor: '6.0'
}

for(let propiedad in automovil) console.log(propiedad)
// por defecto itera sobre los keys

// pero podemos pasarle mas valores de iteracion usando of
for(let [propiedad,valor] of Object.entries(automovil)){
  console.log(`${propiedad} -> ${valor}`)
} 

