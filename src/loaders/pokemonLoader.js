import { json } from "react-router-dom";

export const pokemonLoader = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

    if (!response.ok) {
      throw json({ message: "Could not fetch all pokemon" });
    }

    return response;
  } catch (error) {
    throw json({ message: error.message || "Something went wrong" });
  }
};
