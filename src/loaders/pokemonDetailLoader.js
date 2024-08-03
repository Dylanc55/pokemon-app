import { json } from "react-router-dom";

export const pokemonDetailLoader = async ({ params }) => {
  const name = params.name;

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + name);

    if (!response.ok) {
      throw json({ message: "Could not fetch pokemon details" });
    }

    return response;
  } catch (error) {
    throw json({ message: "Something went wrong" });
  }
};
