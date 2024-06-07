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
script.js
    - toggleButton.addEventListener
    - async function getPokemonNames()
    - function displayPokemon()
    - function displayStoredPokemon()

## Event aan een element koppelen
script.js
    - toggleButton.addEventListener
    - async function getPokemonNames()
    - function displayPokemon()
    - function displayStoredPokemon()

## Formulier valideren
script.js
 - async function searchPokemonByName(pokemonName)

https://www.youtube.com/watch?v=ZZ595vQcKmA&list=PLGsnrfn8XzXii2J5-Jpqufypu6upxcSGx&index=17&ab_channel=MikeDerycke


## Gebruiken van een constante
script.js
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
script.js
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
script.js
Spread => function shuffleArray(array)

Rest => function addPokemon(...pokemons)
## Iteration over een array
script.js
    - const firstSix = shuffledArray.slice(0,6);
        // List of pokemon with format "number. name"
        for (const element of firstSix) {
            let pokemon = {
                name: '',
                sprite: '',
                type: []
            }
            pokemon.name = element.name
            const url = element.url;
            const {sprite, types} = await getPokemonSpriteAndType(url)
            pokemon.sprite = sprite
            pokemon.type = types
            console.log(pokemon)
            displayPokemon(pokemon);
            i++;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    - function displayedStoredPokemon()
        - pokemon.type.forEach(type => {
            const typeContainer = document.createElement('div');
            typeContainer.classList.add('type-container');

            const typeImage = document.createElement('img');
            typeImage.src =`../pokemonTypes/${type}.avif`;
            typeImage.alt = type;
            typeImage.width = 64;
            typeImage.height = 32;
            typeContainer.appendChild(typeImage);
            typesElement.appendChild(typeContainer);
        });
## Arrow function
script.js
- toggleButton.addEventListener('click', () => )
- button.addEventListener('click', () => )
- document.getElementById('searchButton').addEventListener('click', (e) => 
## Callback function
script.js
- document.addEventListener('DOMContentLoaded', function())
- toggleButton.addEventListener('click', function())
- button.addEventListener('click', function() )
- removeButton.addEventListener('click', function())
- document.getElementById('searchButton').addEventListener('click',    function(e))
## Promise
script.js
 - const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1017');
  const data = await response.json();

## Consumer methods
script.js
## Async & Await
script.js
 - async function getPokemonSpriteAndType(url)
  - const response = await fetch(url);
    const data = await response.json();
## Self executing function
script.js
(function startUp() {
    getPokemonNames();
    }())
## Fetch om data op te halen
script.js
- const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1017');
- const response = await fetch(url);
- const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

## JSON manipuleren en weergeven
script.js
- const data = await response.json();

## Basis CSS Animatie
Css transitions solutions from canvas ehb
script.js
id = removeAnimation
id = addAnimation
id = toggleButton


## Gebruiken van een flexbox of CSS grid
script.js


## Gebruik van LocalStorage
script.js
    - function addPokemon(pokemon)
        - if (typeof(Storage) !== "undefined") {
        
        let storedPokemon = JSON.parse(localStorage.getItem('pokemonList')) || [];
        if (storedPokemon.length >= 6) {
            console.log("Too many pokémons");
            return false;
            //Note to myself, add pop up to show the full team
        }
        else{
            storedPokemon.push(pokemon);
            localStorage.setItem('pokemonList', JSON.stringify(storedPokemon));
            console.log(`${pokemon.name} has been added to local storage.`);
        }
    } else {
        console.error("Local storage is not supported in this browser.");
        
    }