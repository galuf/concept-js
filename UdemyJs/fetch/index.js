const app = document.getElementById("users");

const peticion = async (cantidad) => {
  let html = "";
  let url = `https://randomuser.me/api/?results=${cantidad}&nat=us`;
  let res = await fetch(url);
  let data = await res.json();
  const { results } = data;
  results.forEach((element) => {
    html += `<div> 
                <ul class='box'>
                  <li>${element["name"]["first"]}</li>
                  <li>${element["email"]}</li>
                  <img src="${element.picture.medium}">
                </ul>
            </div>`;
  });

  app.innerHTML = html;
};
peticion(15);
