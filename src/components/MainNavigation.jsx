import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import SearchIcon from "./SearchIcon";

import { setModalIsVisible } from "../store/ui";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const dispatch = useDispatch();

  function handleOpenModal() {
    dispatch(setModalIsVisible(true));
  }

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <h3>Pokémon</h3>

        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/pokemon"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Pokémon
            </NavLink>
          </li>

          <li>
            <button className={classes.search} onClick={handleOpenModal}>
              <SearchIcon />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
