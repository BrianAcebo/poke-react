export const getPokemon = async (singlePokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;

    const res = await fetch(url, {
        method: 'get',
    })
    const data = await res.json();
    const pokemon = data.results.map((poke) => {
        return poke.name;
    })

    const search = pokemon.find((name) => {
        return name === singlePokemon;
    })

    console.log(search)
    // return search
}