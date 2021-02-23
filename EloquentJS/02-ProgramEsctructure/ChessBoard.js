let width = 8
let height = 8

for(let i=0;i<height;i++){
  fila = ""
  let aux = i
  while(fila.length!=width){
    if(aux%2==0)
      fila +=" "
    else{
      fila+="#"
    }
    aux+=1
  }
  console.log(fila)
}