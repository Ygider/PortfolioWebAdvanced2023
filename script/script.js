(async function getPokemonNames() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1017');
        const data = await response.json();
        let i=1;
        
        // List of pokémon with as format "number. name"
        data.results.forEach((element) => {
                console.log(`${i}. ${element.name}`);  
                i++;  
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
})