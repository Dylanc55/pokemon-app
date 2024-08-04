import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

const MoveDetailPage = () => {
  const { move } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={move}>
        {(loadedMove) => {
          console.log("loadedMove :>> ", loadedMove);
          return <div>Move Detail Page</div>;
        }}
      </Await>
    </Suspense>
  );
};

export default MoveDetailPage;
