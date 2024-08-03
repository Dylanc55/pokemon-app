import { useLoaderData } from "react-router-dom";

const PokemonDetailPage = () => {
  const {
    id,
    abilities,
    base_experience,
    cries,
    forms,
    game_indices,
    height,
    held_items,
    is_default,
    location_areas_encounters,
    moves,
    name,
    order,
    past_abilities,
    past_types,
    species,
    sprites,
    stats,
    types,
    weight,
  } = useLoaderData();

  return (
    <>
      <section className="pokemon-detail-name">
        <img src={sprites.front_default} alt={`image of the pokemon ${name}`} />
        <h1>{name.toUpperCase()}</h1>
        <img src={sprites.back_default} alt={`image of the pokemon ${name}`} />
      </section>
    </>
  );
};

export default PokemonDetailPage;
