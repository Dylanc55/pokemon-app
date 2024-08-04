import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";

import Card from "../components/UI/Card";
import Grid from "../components/UI/Grid";

import classes from "./MoveDetail.module.css";

const MoveDetailPage = () => {
  const { move } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={move}>
        {({
          name,
          accuracy,
          power,
          pp,
          damage_class,
          effect_chance,
          effect_entries,
          learned_by_pokemon,
        }) => {
          const entry = effect_entries.find(
            (entry) => entry.language.name === "en"
          );

          return (
            <section className={classes.move}>
              <h1>{name.toUpperCase()}</h1>

              <Card>
                <p className={classes.description}>{entry.effect}</p>
              </Card>

              <h3>Stats</h3>

              <Card>
                <Grid>
                  {!!accuracy && (
                    <li>
                      <h4 className={classes.title}>accuracy</h4>
                      <p className={classes["content-lg"]}>{accuracy}</p>
                    </li>
                  )}
                  {!!power && (
                    <li>
                      <h4 className={classes.title}>power</h4>
                      <p className={classes["content-lg"]}>{power}</p>
                    </li>
                  )}
                  <li>
                    <h4 className={classes.title}>power points</h4>
                    <p className={classes["content-lg"]}>{pp}</p>
                  </li>
                  <li>
                    <h4 className={classes.title}>damage class</h4>
                    <p className={classes["content-lg"]}>{damage_class.name}</p>
                  </li>
                  {effect_chance && (
                    <li>
                      <h4 className={classes.title}>effect chance</h4>
                      <p className={classes["content-lg"]}>{effect_chance}</p>
                    </li>
                  )}
                </Grid>
              </Card>

              <h3>Pokémon</h3>

              <Card>
                <Grid>
                  {learned_by_pokemon.map((pokemon) => (
                    <li key={pokemon.name}>
                      <Link to={`/pokemon/${pokemon.name}`}>
                        <p className={classes.content}>{pokemon.name}</p>
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

export default MoveDetailPage;
