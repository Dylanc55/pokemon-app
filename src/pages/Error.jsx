import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import PokemonSearch from "../components/PokemonSearch";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong! Please try again";

  if (isRouteErrorResponse(error)) {
    title = "A route error occurred!";
    message = error.data;
  }

  return (
    <>
      <MainNavigation />
      <PokemonSearch />

      <main>
        <h1>{title}</h1>
        <p>{message}</p>
      </main>
    </>
  );
};

export default ErrorPage;
