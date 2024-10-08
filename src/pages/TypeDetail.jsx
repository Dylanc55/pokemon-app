import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";

import Card from "../components/UI/Card";
import Grid from "../components/UI/Grid";

import classes from "./TypeDetail.module.css";
import humanize from "../utils/humanize";

const TypeDetailPage = () => {
  const { type } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={type}>
        {({ name, damage_relations, moves, pokemon }) => {
          const damageRelations = Object.entries(damage_relations);

          return (
            <section className={classes.type}>
              <h1>{humanize(name).toUpperCase()}</h1>

              {damageRelations.map(([key, value]) => {
                const haveValue = !!value.length;

                return (
                  <div key={key}>
                    <h3>{humanize(key)}</h3>

                    <Card>
                      <Grid>
                        {!haveValue && <p className={classes.content}>none</p>}
                        {haveValue &&
                          value.map((el) => (
                            <li key={el.name}>
                              <Link
                                to={el.url.replace(
                                  "https://pokeapi.co/api/v2",
                                  ""
                                )}
                              >
                                <p className={classes.content}>
                                  {humanize(el.name)}
                                </p>
                              </Link>
                            </li>
                          ))}
                      </Grid>
                    </Card>
                  </div>
                );
              })}

              <h3>Moves</h3>

              <Card>
                <Grid>
                  {moves.map((move) => (
                    <li key={move.name}>
                      <Link
                        to={move.url.replace("https://pokeapi.co/api/v2", "")}
                      >
                        <p className={classes.content}>{humanize(move.name)}</p>
                      </Link>
                    </li>
                  ))}
                </Grid>
              </Card>

              <h3>Pokémon</h3>

              <Card>
                <Grid>
                  {pokemon.map(({ pokemon }) => (
                    <li key={pokemon.name}>
                      <Link to={`/pokemon/${pokemon.name}`}>
                        <p className={classes.content}>
                          {humanize(pokemon.name)}
                        </p>
                      </Link>
                    </li>
                  ))}
                </Grid>
              </Card>
            </section>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default TypeDetailPage;
