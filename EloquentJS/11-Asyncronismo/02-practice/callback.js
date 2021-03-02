// Entendiendo callbacks

function sync(callback) {
  // Fucion que recibe una funcion como parametro
  setTimeout(() => {
    const res = deferred();
    callback(res); // esta funcion tiene como parametro un valor "res"
  }, 1000);
}

function deferred() {
  return "deferret";
}

// sync((respuesta) => {
//   // Al llamar a la funcion el callback recibe un valor "respuesta" el cual podemos usar
//   console.log("respuesta");
// });

// Ejmplo de salarios

function getSalary(callback) {
  setTimeout(() => {
    callback(33000);
  }, 1000);
}

function subtractTax(salary, callback) {
  setTimeout(() => {
    callback(salary * 0.75);
  }, 1000);
}

function subtractRent(salary, callback) {
  setTimeout(() => {
    callback(salary - 5000);
  }, 1000);
}

function getDisposableIncome(callback) {
  getSalary((salary) => {
    subtractTax(salary, (salaryRes) => {
      subtractRent(salaryRes, (salaryResf) => {
        callback(salaryResf);
      });
    });
  });
}

getDisposableIncome((salary) => {
  console.log(salary);
});
