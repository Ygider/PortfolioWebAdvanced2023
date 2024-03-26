async function getPokemonNames() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1017');
        const data = await response.json();
        let i=1;
        const shuffledArray = shuffleArray(data.results);
        const firstSix = shuffledArray.slice(0,6);
        // List of pokémon with as format "number. name"
        firstSix.forEach((element) => {
                console.log(`${i}. ${element.url}`);  
                i++;  
        });
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
getPokemonNames();