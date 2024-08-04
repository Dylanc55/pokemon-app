import { defer, json } from "react-router-dom";

const loadMove = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/move/` + id);

  if (!response.ok) {
    throw json({ message: "Could not fetch move details" });
  }

  const data = await response.json();

  return data;
};

export async function moveDetailLoader({ params }) {
  const id = params.id;

  return defer({
    move: loadMove(id),
  });
}
