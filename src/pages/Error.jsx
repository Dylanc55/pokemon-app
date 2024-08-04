import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (isRouteErrorResponse(error)) {
    console.log("error :>> ", error);
  }

  return (
    <>
      <MainNavigation />

      <main>
        <h3>{title}</h3>
        <p>{message}</p>
      </main>
    </>
  );
};

export default ErrorPage;
