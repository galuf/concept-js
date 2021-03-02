// Ejmplo de salarios con promesas

function subtractTax(salary) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(salary * 0.75);
    }, 1000);
  });
}

function subtractRent(salary) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(salary - 5000);
    }, 1000);
  });
}

function getDisposableIncome(salary) {
  return subtractTax(salary).then(subtractRent);
}

getDisposableIncome(33000).then((salary) => console.log(salary));

// Que hariamos para pedir dos saldos disponibles:
getDisposableIncome(20000).then((salary) => console.log(salary));
getDisposableIncome(33000).then((salary) => console.log(salary));
// esto funciona correctamente, pero los tiempos no son optimos
// el primer Income demora 2 segundos, una vez hecho esto, el segundo demorara
// otro 2 segundo por lo cual esto demorarar 4 segundos en total

/************ Promise.all() *************/
// Promise all nos permite hacer solicitudes asincronas
Promise.all([getDisposableIncome(20000), getDisposableIncome(33000)]).then(
  (salaries) => {
    salaries.forEach((salary, index) => {
      console.log(` El salrio disponible ${index + 1} es de : ${salary} `);
    });
  }
);
// Esto funciona mejor, porque simula un paralelismo en las peticiones de los incomes
// por lo cual demorara solo 2 segundos
