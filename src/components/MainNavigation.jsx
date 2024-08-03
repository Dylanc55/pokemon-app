import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <h3>Pokémon</h3>

        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/pokemon"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Pokémon
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
