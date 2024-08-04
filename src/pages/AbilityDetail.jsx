import { Suspense } from "react";
import { Await, useLoaderData, Link } from "react-router-dom";

import Card from "../components/UI/Card";
import Grid from "../components/UI/Grid";

import classes from "./AbilityDetail.module.css";
import humanize from "../utils/humanize";

const AbilityDetailPage = () => {
  const { ability } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={ability}>
        {({ name, effect_entries, generation, pokemon }) => {
          const entry = effect_entries.find(
            (entry) => entry.language.name === "en"
          );

          return (
            <section className={classes.ability}>
              <h1>{humanize(name).toUpperCase()}</h1>

              {!!entry && (
                <Card>
                  <p className={classes.description}>{entry.effect}</p>
                </Card>
              )}

              <h3>Generation</h3>

              <Card>
                <p className={classes.content}>{humanize(generation.name)}</p>
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

export default AbilityDetailPage;
