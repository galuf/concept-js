const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20.2;
const numero5 = 20;

//Comviertiendo de String a Numero
console.log(numero1);
console.log(Number.parseInt(numero1)); // -> 20
console.log(Number.parseFloat(numero2)); // ->20.2
console.log(Number.parseInt(numero3)); // -> NaN

//Saber si un numero es entero o no
console.log(Number.isInteger(numero5)); //-> true
console.log(Number.isInteger(numero4)); //-> false
