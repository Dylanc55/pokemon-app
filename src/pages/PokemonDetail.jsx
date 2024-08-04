import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";

import Card from "../components/UI/Card";
import Grid from "../components/UI/Grid";

import classes from "./PokemonDetail.module.css";

const PokemonDetailPage = () => {
  const { detail } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={detail}>
        {({ name, sprites, stats, abilities, moves, types }) => {
          return (
            <>
              <section className={classes.name}>
                <div className={classes.placeholder}>
                  <img
                    src={sprites.front_default}
                    alt={`front image of the pokemon ${name}`}
                  />
                </div>

                <h1>{name.toUpperCase()}</h1>

                <div className={classes.placeholder}>
                  <img
                    src={sprites.back_default}
                    alt={`back image of the pokemon ${name}`}
                  />
                </div>
              </section>

              <h3>Stats</h3>

              <Card>
                <Grid>
                  {stats.map(({ stat, base_stat }) => (
                    <li key={stat.name} className={classes.item}>
                      <h4 className={classes.title}>{stat.name}</h4>
                      <p className={classes["content-lg"]}>{base_stat}</p>
                    </li>
                  ))}
                </Grid>
              </Card>

              <h3>Abilities</h3>

              <Card>
                <Grid>
                  {abilities.map(({ ability }) => (
                    <li key={ability.name} className={classes.item}>
                      <Link
                        to={ability.url.replace(
                          "https://pokeapi.co/api/v2",
                          ""
                        )}
                        className={classes["content-sm"]}
                      >
                        <p>{ability.name}</p>
                      </Link>
                    </li>
                  ))}
                </Grid>
              </Card>

              <h3>Types</h3>

              <Card>
                <Grid>
                  {types.map(({ type }) => (
                    <li key={type.name} className={classes.item}>
                      <Link
                        to={type.url.replace("https://pokeapi.co/api/v2", "")}
                      >
                        <p className={classes["content-sm"]}>{type.name}</p>
                      </Link>
                    </li>
                  ))}
                </Grid>
              </Card>

              <h3>Moves</h3>

              <Card>
                <Grid>
                  {moves.map(({ move }) => (
                    <li key={move.name} className={classes.item}>
                      <Link
                        to={move.url.replace("https://pokeapi.co/api/v2", "")}
                      >
                        <p className={classes["content-sm"]}>{move.name}</p>
                      </Link>
                    </li>
                  ))}
                </Grid>
              </Card>
            </>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default PokemonDetailPage;
