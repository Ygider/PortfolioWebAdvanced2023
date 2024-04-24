async function getPokemonNames() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1017');
        const data = await response.json();
        let i=1;
        const shuffledArray = shuffleArray(data.results);
        const firstSix = shuffledArray.slice(0,6);
        // List of pokémon with as format "number. name"
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
        <p>Type(s): ${pokemon.type.join(', ')}</p>
    `;
    if (pokemonContainerTop.childElementCount < 3) {
        pokemonContainerTop.appendChild(pokemonElement);
    } else {
        pokemonContainerBottom.appendChild(pokemonElement);
    }


} 
getPokemonNames();