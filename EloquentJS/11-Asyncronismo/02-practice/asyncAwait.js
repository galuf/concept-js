// Ejmplo de salarios con async await

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

async function getDisposableIncome(salary) {
  let noTax = await subtractTax(salary);
  let noRent = await subtractRent(noTax);
  return noRent;
}

getDisposableIncome(33000).then((salary) => console.log(salary));
