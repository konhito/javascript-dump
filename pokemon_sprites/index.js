// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("could not fetch");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data.name))
//   .catch((error) => console.error(error)); // fetch function is a promis based is either goona replace and reject

document.querySelector(".btn").addEventListener("click", () => {
  fetchData();
});
async function fetchData() {
  const pokemonName = document.getElementById("poke").value.toLowerCase();
  console.log(pokemonName);

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error("NOt able to fetch");
    }
    const data = await response.json();
    const pokemonsprit = data.sprites.front_default;
    const imgElement = document.getElementById("pokeid");
    imgElement.src = pokemonsprit;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
