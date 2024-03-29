async function getPokemonNames() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1017');
        const data = await response.json();
        let i=1;
        const shuffledArray = shuffleArray(data.results);
        const firstSix = shuffledArray.slice(0,6);
        // List of pokémon with as format "number. name"
        for (const element of firstSix) {
            console.log(`${i}. ${element.name}`);
            const url = element.url;
            const response2 = await fetch(url);
            const data2 = await response2.json();
            const sprite = await getPokemonSpriteAndType(element.url);
            const type = data2.types.length;
            let types = [];
            if (type === 1) {
                //console.log("Type: ", data2.types[0].type.name);
                types.push(data2.types[0].type.name);
            } else {   
                //console.log("Type1: ", data2.types[0].type.name, "Type2:", data2.types[1].type.name );
                types.push(data2.types[0].type.name);
                types.push(data2.types[1].type.name);
            }
            console.log(types);
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
        console.log(sprite);
        //const type = data.types;
        //console.log(type.length);
        return sprite;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    

}
getPokemonNames();