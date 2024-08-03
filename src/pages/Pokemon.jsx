import { useLoaderData } from "react-router-dom";

const PokemonPage = () => {
  const { results: items } = useLoaderData();

  return (
    <>
      <h1>Original Pokemon</h1>

      <ul className="pokemon-list">
        {items.map(({ name }) => (
          <li className="pokemon-item" key={name}>
            {name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PokemonPage;
