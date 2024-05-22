## function getPokemonName
- Gebruiken van een constante om data te bewaren uit een API
- JSON manipuleren en weergeven door data te halen uit response
    Coding along - S2E2 - Steps 1 to 3 by Mike Derycke
    https://www.youtube.com/watch?v=Q13QGyTqePs
## shuffleArray

    How to Fisher-Yates shuffle a JavaScript array? asked by loadmasterbob
    https://stackoverflow.com/questions/59810241/how-to-fisher-yates-shuffle-a-javascript-array
    Elementen selecteren

## Elementen manipuleren
script.jss 
    - toggleButton.addEventListener
    - async function getPokemonNames()
    - function displayPokemon()
    - function displayStoredPokemon()

## Event aan een element koppelen
script.jss
    - toggleButton.addEventListener
    - async function getPokemonNames()
    - function displayPokemon()
    - function displayStoredPokemon()

## Formulier valideren

## Gebruiken van een constante
script.jss
    - const toggleButton = document.getElementById('toggleButton');
    - const pokemonContainer = document.getElementById('pokemonContainer');
    - const pokemonTeam = document.getElementById('pokemonTeam');
    - const pokemonContainerTop = document.getElementById('pokemonContainerTop');
    - const pokemonContainerBottom = document.getElementById('pokemonContainerBottom');
    - const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1017');
        const data = await response.json();
        const shuffledArray = shuffleArray(data.results);
        const fir.stSix = shuffledArray.slice(0,6);
## Gebruiken van template literals
script.jss
    - function displayPokemon()
        - pokemonElement.innerHTML = `
             <p>${pokemon.name}</p>
             <img src="${pokemon.sprite}" alt="${pokemon.name}">
            `;
    - function addPokemon(pokemon)
        - console.log(`${pokemon.name} has been added to local storage.`);
    - function removePokemonByName(name)
        - console.log(`Pokemon with name ${name} has been removed from local storage.`);
        - console.log(`Pokemon with name ${name} not found in local storage.`);
## Destructuring
scrip.js
        - async function getPokemonNames()
            - pokemon.name = element.name()
            - const url = element.url;
        - function displayPokemon()
            - pokemonElement.innerHTML = `
            <p>${pokemon.name}</p>
            <img src="${pokemon.sprite}" alt="${pokemon.name}">
              `;
            - pokemon.type.forEach
        - function addPokemon(pokemon)
            - console.log(`${pokemon.name} has been added to local storage.`);
        - function removePokemonByName(name)
            - const index = storedPokemon.findIndex(pokemon => pokemon.name === name);
        - function displayStoredPokemon()
            - pokemonElement.innerHTML = `
            <p>${pokemon.name}</p>
            <img src="${pokemon.sprite}" alt="${pokemon.name}">
            `;
            - pokemon.type.forEach
            - removeButton.id = pokemon.name;
            - removePokemonByName(pokemon.name);
            
## Spread & Rest operator
## Iteration over een array
## Arrow function
## Callback function
## Promise
## Consumer methods
## Async & Await
## Self executing function
## Fetch om data op te halen
## JSON manipuleren en weergeven
## Basis CSS Animatie
## Gebruiken van een flexbox of CSS grid
## Gebruik van LocalStorage

