import { Link, useLoaderData } from "react-router-dom";

import Grid from "../components/UI/Grid";

import classes from "./Pokemon.module.css";

const PokemonPage = () => {
  const { results: items } = useLoaderData();

  return (
    <>
      <h1>Original Pokémon</h1>

      <Grid className={classes.grid}>
        {items.map(({ name }) => (
          <li className={classes.item} key={name}>
            <Link to={`/pokemon/${name}`}>{name}</Link>
          </li>
        ))}
      </Grid>
    </>
  );
};

export default PokemonPage;
