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

//otra forma de hacer casting
console.log(parseInt(numero4));
console.log(parseFloat(numero5));

//Para convertir cadena a Objeto/JSON/array
const array = [1, 2, 3, 4];
console.log(array);
console.log(JSON.stringify(array));

const json_str = '{"a":1, "b":2}';
const json_obj = JSON.parse(json_str);
console.log(json_str);
console.log(json_obj);
console.log(Object.entries(json_obj));
