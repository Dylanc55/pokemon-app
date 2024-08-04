import { defer, json } from "react-router-dom";

const loadType = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/` + id);

  if (!response.ok) {
    throw json({ message: "Could not fetch type details" });
  }

  const data = await response.json();

  return data;
};

export async function typeDetailLoader({ params }) {
  const id = params.id;

  return defer({
    type: loadType(id),
  });
}
