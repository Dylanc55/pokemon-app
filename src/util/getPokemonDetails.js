const getPokemonDetails = async (url) => {
  const response = await fetch(url);
  const details = await response.json();

  return details;
};

export default getPokemonDetails;
