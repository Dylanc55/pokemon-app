import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import PokemonSearch from "../components/PokemonSearch";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong! Please try again";

  if (isRouteErrorResponse(error)) {
    console.log("error :>> ", error);
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
