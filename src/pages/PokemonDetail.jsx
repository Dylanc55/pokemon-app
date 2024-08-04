import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

const PokemonDetailPage = () => {
  const { detail } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={detail}>
        {({ name, sprites, stats, abilities, moves, types }) => {
          return (
            <>
              <section className="pokemon-detail-name">
                <div className="image-placeholder">
                  <img
                    src={sprites.front_default}
                    alt={`image of the pokemon ${name}`}
                  />
                </div>

                <h1>{name.toUpperCase()}</h1>

                <div className="image-placeholder">
                  <img
                    src={sprites.back_default}
                    alt={`image of the pokemon ${name}`}
                  />
                </div>
              </section>

              <h3>Stats</h3>

              <ul className="pokemon-detail-stats">
                {stats.map(({ stat, base_stat }) => (
                  <li key={stat.name}>
                    <h4>{stat.name}</h4>
                    <p>{base_stat}</p>
                  </li>
                ))}
              </ul>

              <h3>Abilities</h3>

              <ul className="pokemon-detail-abilities">
                {abilities.map(({ ability }) => (
                  <li key={ability.name}>
                    <p>{ability.name}</p>
                  </li>
                ))}
              </ul>

              <h3>Types</h3>

              <ul className="pokemon-detail-types">
                {types.map(({ type }) => (
                  <li key={type.name}>
                    <p>{type.name}</p>
                  </li>
                ))}
              </ul>

              <h3>Moves</h3>

              <ul className="pokemon-detail-moves">
                {moves.map(({ move }) => (
                  <li key={move.name}>
                    <p>{move.name}</p>
                  </li>
                ))}
              </ul>
            </>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default PokemonDetailPage;
