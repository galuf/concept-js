
for(let i=1;i<=15;i++){
  valor = ""
  if(i%3==0) valor += "Fizz"
  if(i%5==0) valor += "Buzz"

  console.log(valor || i)
}