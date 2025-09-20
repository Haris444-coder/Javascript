// ChatGPT Conversation Links:
// 1. https://chatgpt.com/share/67ff1ed6-9fc8-8009-b65b-777618af8a7f
// 2. https://chatgpt.com/share/67ff1efb-8280-8009-a175-fa6234cff35a 
// Add as many links as needed

// PokeAPI - https://pokeapi.co/

// const represents all the constants that are used in the code

const apiURL = "https://pokeapi.co/api/v2/pokemon/";
const searchInput = document.getElementById("search-input");
const submit = document.getElementById("search-button");
const favourite = document.getElementById("toggle-favourites");
const details = document.getElementById("pokemon-details");
const load = document.getElementById("loading");
const modal = document.getElementById("pokemon-modal");
const closeModal = document.getElementById("close-modal");
const name = document.getElementById("modal-name");
const image = document.getElementById("modal-img");
const height = document.getElementById("modal-height");
const weight = document.getElementById("modal-weight");
const stats = document.getElementById("modal-stats");

let favourites = JSON.parse(localStorage.getItem("favourites")) || []; // to store the favourite Pokémon in local storage
let isViewingFavourites = false;

async function fetchAndDisplayPokemon(name) {
    showLoading(true);
    details.innerHTML = "";
  
    try {
      const response = await fetch(apiURL + name.toLowerCase());
      if (!response.ok) throw new Error("Pokémon not found");
      const data = await response.json();
      const card = createCard(data);
      details.appendChild(card);
    } catch (err) {
      showError("❌ Pokémon not found.");
    }
  
    showLoading(false);
  }

  function createCard(pokemon, allowFave = true) { // to create a card for each Pokémon
    const card = document.createElement("div");
    card.className = "pokemon-card";
  
    const name = document.createElement("h2");
    name.textContent = pokemon.name;
    card.appendChild(name);
  
    const img = document.createElement("img");
    img.src = pokemon.sprites.other["official-artwork"].front_default;
    img.alt = pokemon.name;
    card.appendChild(img);
  
    const id = document.createElement("p");
    id.textContent = `ID: ${pokemon.id}`;
    card.appendChild(id);
  
    const type = document.createElement("p"); // to display the types of Pokémon
    type.textContent = `Types: ${types(pokemon)}`;
    card.appendChild(type);
  
    const ability = document.createElement("p");
    ability.textContent = `Abilities: ${ability(pokemon)}`;
    card.appendChild(ability);
  
    const infoBtn = document.createElement("button");
    infoBtn.textContent = "More Info";
    infoBtn.addEventListener("click", () => pokeInfo(pokemon));
    card.appendChild(infoBtn);
  
    if (allowFave) { // to allow adding Pokémon to favourites
      const faveBtn = document.createElement("button");
      faveBtn.textContent = "⭐ Add to Favourites";
      faveBtn.addEventListener("click", () => addToFavourites(pokemon));
      card.appendChild(faveBtn);
    }
  
    return card;
  }

  function pokeInfo(pokemon) { // to show more information about Pokémon in a modal
    name.textContent = pokemon.name;
    image.src = pokemon.sprites.other["official-artwork"].front_default;
    image.alt = pokemon.name;
    height.textContent = `Height: ${(pokemon.height / 10).toFixed(1)} m`;
    weight.textContent = `Weight: ${(pokemon.weight / 10).toFixed(1)} kg`;
    stats.innerHTML = pokeStats(pokemon);
  
    const modalAbilities = document.getElementById("modal-abilities");
    if (modalAbilities) {
      modalAbilities.textContent = ability(pokemon);
    }
  
    const modalId = document.getElementById("modal-id");
    if (modalId) {
      modalId.textContent = `#${String(pokemon.id).padStart(3, "0")}`;
    }
  
    modal.classList.remove("hidden");
  }

  function addToFavourites(pokemon) {
    if (favourites.some(p => p.id === pokemon.id)) {
      alert("Already in favourites!");
      return;
    }
  
    if (favourites.length >= 6) {
      alert("You can only have 6 favourite Pokémon!");
      return;
    }
  
    favourites.push(pokemon);
    localStorage.setItem("favourites", JSON.stringify(favourites));
    alert(`${pokemon.name} added to favourites!`);
  }


function showLoading(isLoading) { // to show or hide the loading indicator
  load.classList.toggle("hidden", !isLoading);
}

function showError(message) { // to show an error message when Pokémon is not found
  details.innerHTML = "";
  const p = document.createElement("p");
  p.textContent = message;
  details.appendChild(p);
}

function types(pokemon) { // to get the types of Pokémon and format them as a string
  return pokemon.types.map(t => t.type.name).join(", ");
}

function ability(pokemon) { // to get the abilities of Pokémon and format them as a string
  return pokemon.abilities.map(a => a.ability.name).join(", ");
}

function pokeStats(pokemon) {
  return pokemon.stats.map(s => `${s.stat.name}: ${s.base_stat}<br>).join("")`);
}

function displayFavourites() {
  details.innerHTML = "";

  if (favourites.length === 0) {
    const p = document.createElement("p");
    p.textContent = "No favourites yet!";
    details.appendChild(p);
    return;
  }

  favourites.forEach(p => {
    const card = createCard(p, false);
    details.appendChild(card);
  });
}

submit.addEventListener("click", () => {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) return;
  isViewingFavourites = false;
  fetchAndDisplayPokemon(query);
});

favourite.addEventListener("click", () => {
  isViewingFavourites = !isViewingFavourites;
  favourite.textContent = isViewingFavourites ? "Back to Search" : "View Favourites";

  if (isViewingFavourites) {
    searchInput.style.display = "none";
    submit.style.display = "none";
    displayFavourites();
  } else {
    searchInput.style.display = "inline-block";
    submit.style.display = "inline-block";
    details.innerHTML = "";
  }
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});