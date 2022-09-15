const namePlanet = document.getElementById('name');
const climatePlanet = document.getElementById('climate');
const popPlanet = document.getElementById('population');
const btnRandomPlanet = document.querySelector('.random-planets');
let nbPlanets = 1;

let myHeaders = new Headers();

btnRandomPlanet.addEventListener('click', () => {
     let request = "https://swapi.dev/api/planets/" + `${nbPlanets}` + "/";
     
     //60 planetes au total
     nbPlanets = Math.floor(Math.random() * 60);
     
     fetch(request)
     .then(res => res.json())
     .then(data => {
          namePlanet.textContent = data.name
          climatePlanet.textContent = data.climate
          popPlanet.textContent = data.population
     })
     .catch((error) => console.log(error));
});