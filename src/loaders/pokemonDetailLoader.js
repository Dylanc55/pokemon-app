import { defer, json } from "react-router-dom";

const loadDetail = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + name);

  if (!response.ok) {
    throw json({ message: "Could not fetch pokemon details" });
  }

  const data = await response.json();

  return data;
};

export async function pokemonDetailLoader({ params }) {
  const name = params.name;

  return defer({
    detail: loadDetail(name),
  });
}
