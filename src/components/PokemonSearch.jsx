import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Modal from "./UI/Modal";

import { setModalIsVisible } from "../store/ui";

import classes from "./PokemonSearch.module.css";

const PokemonSearch = () => {
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState("");
  const navigate = useNavigate();

  const isModalVisible = useSelector((state) => state.ui.modalIsVisible);

  function handleCloseModal() {
    dispatch(setModalIsVisible(false));
  }

  const handleChange = (event) => {
    const name = event.target.value.toLowerCase().replaceAll(" ", "-").trim();

    setPokemon(name);
  };

  const handleSearch = () => {
    handleCloseModal();

    navigate("/pokemon/" + pokemon);
  };

  return (
    <Modal open={isModalVisible} onClose={handleCloseModal}>
      <div className={classes.close}>
        <button onClick={handleCloseModal}>Close</button>
      </div>

      <h3 className={classes.title}>Search for a Pokémon</h3>

      <div className={classes.search}>
        <input type="text" placeholder="name" onChange={handleChange} />

        <button onClick={handleSearch}>Search</button>
      </div>
    </Modal>
  );
};

export default PokemonSearch;
