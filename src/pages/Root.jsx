import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import PokemonSearch from "../components/PokemonSearch";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />

      <main>
        <Outlet />
      </main>
      <PokemonSearch />
    </>
  );
};

export default RootLayout;
