const getOriginalPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151'");
  const { results } = await response.json();

  return results;
};

export default getOriginalPokemon;
