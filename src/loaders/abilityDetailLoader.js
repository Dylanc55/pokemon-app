import { defer, json } from "react-router-dom";

const loadAbility = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/ability/` + id);

    if (!response.ok) {
      throw json({ message: "Could not fetch ability details" });
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw json({ message: error.message || "Something went wrong" });
  }
};

export async function abilityDetailLoader({ params }) {
  const id = params.id;

  return defer({
    ability: loadAbility(id),
  });
}
