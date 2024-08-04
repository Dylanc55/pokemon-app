import { defer, json } from "react-router-dom";

const loadAbility = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/ability/` + id);

  if (!response.ok) {
    throw json({ message: "Could not fetch ability details" });
  }

  const data = await response.json();

  return data;
};

export async function abilityDetailLoader({ params }) {
  const id = params.id;

  return defer({
    ability: loadAbility(id),
  });
}
