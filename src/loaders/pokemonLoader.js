import { json } from "react-router-dom";

export const pokemonLoader = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

  if (!response.ok) {
    throw json({ message: "Could not fetch all pokemon" });
  }

  return response;
};
