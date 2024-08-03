import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import PokemonPage from "./pages/Pokemon";
import PokemonDetailPage from "./pages/PokemonDetail";

import { pokemonLoader } from "./loaders/pokemonLoader";
import { pokemonDetailLoader } from "./loaders/pokemonDetailLoader";

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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
