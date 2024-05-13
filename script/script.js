document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const pokemonContainer = document.getElementById('pokemonContainer');
    const pokemonTeam = document.getElementById('pokemonTeam');

    // Add event listener to the toggle button
    toggleButton.addEventListener('click', function() {
        // Toggle visibility of the pokemon team
        if (pokemonContainer.style.display === 'none') {
            pokemonContainer.style.display = 'block';
            pokemonTeam.style.display = 'none';
            toggleButton.textContent = 'Show Pokemon Team';
        } else {
            pokemonContainer.style.display = 'none';
            pokemonTeam.style.display = 'block';
            toggleButton.textContent = 'Show Pokemon Container';
        }
    });
});
async function getPokemonNames() {
    const pokemonContainerTop = document.getElementById('pokemonContainerTop');
    const pokemonContainerBottom = document.getElementById('pokemonContainerBottom');
    const pokemonContainer = document.getElementById('pokemonContainer');
    pokemonContainerTop.innerHTML = '';
    pokemonContainerBottom.innerHTML = '';
    
    
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1017');
        const data = await response.json();
        let i=1;
        const shuffledArray = shuffleArray(data.results);
        const firstSix = shuffledArray.slice(0,6);
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
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
async function getPokemonSpriteAndType(url){
    try {
        const response = await fetch(url);
        const data = await response.json();
        const sprite= data.sprites.other["official-artwork"].front_default;

        const type = data.types.length
        let types = [];
        if (type === 1) {
            types.push(data.types[0].type.name);
        } else {
            types.push(data.types[0].type.name);
            types.push(data.types[1].type.name);
        }

        return {sprite, types}
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
function displayPokemon (pokemon){
    const pokemonContainerTop = document.getElementById('pokemonContainerTop');
    const pokemonContainerBottom = document.getElementById('pokemonContainerBottom');
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');
    pokemonElement.innerHTML = `
            <p>${pokemon.name}</p>
            <img src="${pokemon.sprite}" alt="${pokemon.name}">
    `;
    const typesElement = document.createElement('div');
    typesElement.classList.add('types');

    // Display Pokemon type
    pokemon.type.forEach(type => {
        const typeContainer = document.createElement('div');
        typeContainer.classList.add('type-container');

        const typeImage = document.createElement('img');
        typeImage.src =` ../pokemonTypes/${type}.avif`;
        typeImage.alt = type;
        typeImage.width = 64;
        typeImage.height = 32;
        typeContainer.appendChild(typeImage);
        typesElement.appendChild(typeContainer);
    });
    pokemonElement.appendChild(typesElement);
    
    if (pokemonContainerTop.childElementCount < 3) {
        pokemonContainerTop.appendChild(pokemonElement);
    } else {
        pokemonContainerBottom.appendChild(pokemonElement);
    }
    //Add to my team BUTTON
    const button = document.createElement('button');
    button.textContent = 'Add to my team'; 
    button.classList.add('pokemon-button'); 
    button.addEventListener('click', () => {
        addPokemon(pokemon);

        console.log('Button clicked!');
        
    });
    pokemonElement.appendChild(button);


} 
function addPokemon(pokemon) {
    
   if (typeof(Storage) !== "undefined") {
        
        let storedPokemon = JSON.parse(localStorage.getItem('pokemonList')) || [];
        if (storedPokemon.length >= 6) {
            console.log("Too many pokémons");
            return false;
            //Note to myself, add pop up to show the full team
        }

        storedPokemon.push(pokemon);
        
        localStorage.setItem('pokemonList', JSON.stringify(storedPokemon));
        console.log(`${pokemon.name} has been added to local storage.`);
    } else {
        console.error("Local storage is not supported in this browser.");
        
    }
    //Note to mySelf ADD POPUP "Pokemon added to the team, Chose your next pokemon"
    getPokemonNames();
}
function RemovePokemonTeam() {
    if (typeof(Storage) !== "undefined") {
        localStorage.removeItem('pokemonList');
        console.log('Pokémon team has been refreshed.');
    } else {
        console.error("Local storage is not supported in this browser.");
    }
}
function removePokemonByName(name) {
    if (typeof(Storage) !== "undefined") {
        let storedPokemon = JSON.parse(localStorage.getItem('pokemonList')) || [];
        
        // Find index of the pokemon
        const index = storedPokemon.findIndex(pokemon => pokemon.name === name);
        
        if (index !== -1) {
            // Remove the pokemon from the array
            storedPokemon.splice(index, 1);
            // Update local storage with the modified list
            localStorage.setItem('pokemonList', JSON.stringify(storedPokemon));
            console.log(`Pokemon with name ${name} has been removed from local storage.`);
        } else {
            console.log(`Pokemon with name ${name} not found in local storage.`);
        }
    } else {
        console.error("Local storage is not supported in this browser.");
    }
}
function displayStoredPokemon() {
    const storedPokemon = JSON.parse(localStorage.getItem('pokemonList')) || [];

    storedPokemon.forEach(pokemon => {
        const pokemonTeamTop = document.getElementById('pokemonTeamTop');
        const pokemonTeamBottom = document.getElementById('pokemonTeamBottom');
        const pokemonElement = document.createElement('div');
        pokemonElement.classList.add('pokemon');
        pokemonElement.innerHTML = `
            <p>${pokemon.name}</p>
            <img src="${pokemon.sprite}" alt="${pokemon.name}">
        `;
        const typesElement = document.createElement('div');
        typesElement.classList.add('types');

        // Display Pokemon type
        pokemon.type.forEach(type => {
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
        pokemonElement.appendChild(typesElement);

        // Display 3 on Top and 3 bottom
        if (pokemonTeamTop.childElementCount < 3) {
            pokemonTeamTop.appendChild(pokemonElement);
        } else {
            pokemonTeamBottom.appendChild(pokemonElement);
        }
    });
}




getPokemonNames();
displayStoredPokemon();
//test removePokemonByName
//removePokemonByName('pikachu');