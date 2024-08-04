import { useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Search.module.css";

const SearchPage = () => {
  const [pokemon, setPokemon] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.value.toLowerCase().trim();

    setPokemon(name);
  };

  const handleSearch = () => {
    navigate("/pokemon/" + pokemon);
  };

  return (
    <>
      <h3 className={classes.title}>Search for a Pokémon</h3>

      <div className={classes.search}>
        <input type="text" placeholder="name" onChange={handleChange} />

        <button onClick={handleSearch}>Search</button>
      </div>
    </>
  );
};

export default SearchPage;
