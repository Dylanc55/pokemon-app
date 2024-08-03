import { Link, useLoaderData } from "react-router-dom";

const PokemonPage = () => {
  const { results: items } = useLoaderData();

  return (
    <>
      <h1>Original Pokémon</h1>

      <ul className="pokemon-list">
        {items.map(({ name }) => (
          <li className="pokemon-item" key={name}>
            <Link to={`/pokemon/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PokemonPage;
