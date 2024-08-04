import { Link, useLoaderData } from "react-router-dom";

import Grid from "../components/UI/Grid";

import classes from "./Pokemon.module.css";

import humanize from "../utils/humanize";

const PokemonPage = () => {
  const { results: items } = useLoaderData();

  return (
    <>
      <h1>Original Pokémon</h1>

      <Grid className={classes.grid}>
        {items.map(({ name }) => (
          <li className={classes.item} key={name}>
            <Link to={`/pokemon/${name}`}>{humanize(name)}</Link>
          </li>
        ))}
      </Grid>
    </>
  );
};

export default PokemonPage;
