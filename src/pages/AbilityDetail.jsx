import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

import Card from "../components/UI/Card";

import classes from "./AbilityDetail.module.css";

const AbilityDetailPage = () => {
  const { ability } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={ability}>
        {({ name, effect_entries, generation, pokemon }) => {
          console.log("ability :>> ", ability);
          const entry = effect_entries.find(
            (entry) => entry.language.name === "en"
          );

          return (
            <section className={classes.ability}>
              <h1>{name.toUpperCase()}</h1>

              <Card>
                <p>{entry.effect}</p>
              </Card>

              <h3>Generation</h3>

              <Card>
                <p>{generation.name}</p>
              </Card>

              <h3>Pokémon</h3>

              <Card>
                <ul>
                  {pokemon.map(({ pokemon }) => (
                    <li key={pokemon.name}>
                      <p>{pokemon.name}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            </section>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default AbilityDetailPage;
