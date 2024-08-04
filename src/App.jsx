import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import PokemonPage from "./pages/Pokemon";
import PokemonDetailPage from "./pages/PokemonDetail";
import AbilityDetailPage from "./pages/AbilityDetail";
import TypeDetailPage from "./pages/TypeDetail";
import MoveDetailPage from "./pages/MoveDetail";

import { pokemonLoader } from "./loaders/pokemonLoader";
import { pokemonDetailLoader } from "./loaders/pokemonDetailLoader";
import { abilityDetailLoader } from "./loaders/abilityDetailLoader";
import { typeDetailLoader } from "./loaders/typeDetailLoader";
import { moveDetailLoader } from "./loaders/moveDetailLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "pokemon",
        element: <PokemonPage />,
        loader: pokemonLoader,
      },
      {
        path: "pokemon/:name",
        element: <PokemonDetailPage />,
        loader: pokemonDetailLoader,
      },
      {
        path: "ability/:id",
        element: <AbilityDetailPage />,
        loader: abilityDetailLoader,
      },
      {
        path: "type/:id",
        element: <TypeDetailPage />,
        loader: typeDetailLoader,
      },
      {
        path: "move/:id",
        element: <MoveDetailPage />,
        loader: moveDetailLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
