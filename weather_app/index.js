// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("could not fetch");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data.name))
//   .catch((error) => console.error(error)); // fetch function is a promis based is either goona replace and reject

// document.querySelector(".btn").addEventListener("click", () => {
//   fetchData();
// });
// async function fetchData() {
//   const pokemonName = document.getElementById("poke").value.toLowerCase();
//   console.log(pokemonName);

//   try {
//     const response = await fetch(
//       `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
//     );
//     if (!response.ok) {
//       throw new Error("NOt able to fetch");
//     }
//     const data = await response.json();
//     const pokemonsprit = data.sprites.front_default;
//     const imgElement = document.getElementById("pokeid");
//     imgElement.src = pokemonsprit;
//     imgElement.style.display = "block";
//   } catch (error) {
//     console.error(error);
//   }
// }
document.getElementById("btn").addEventListener("click", () => {
  weatherData();
});

async function weatherData() {
  const api = "43a415bd5e78a709a2834b71bc4cd99b";
  const textfld = document.getElementById("intext").value;
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${textfld}&limit=5&appid=${api}`
    );
    if (!response.ok) {
      throw new Error("Not able to fetch");
    }
    const data = await response.json();
    let latitude = data[0].lat;
    let longitude = data[0].lon;

    weatherTemp(latitude, longitude);
  } catch (error) {
    console.error(error);
  }
}

async function weatherTemp(lati, longi) {
  const api = "43a415bd5e78a709a2834b71bc4cd99b";
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${api}`
    );
    if (!response.ok) {
      throw new Error("Not able to featch");
    }
    const data = await response.json();
    let newData = data.main.temp - 273.15;
    const degtemp = parseFloat(newData).toFixed(2);
    console.log(degtemp);
    const temphtml = document.getElementById("temp");
    const textfld = document.getElementById("intext").value;
    temphtml.innerHTML = `The todays temp at ${textfld} is ${degtemp}<sup>*</sup>`;
    temphtml.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
