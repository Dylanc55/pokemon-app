import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

const PokemonDetailPage = () => {
  const { detail } = useLoaderData();

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={detail}>
          {({ name, sprites }) => {
            return (
              <>
                <section className="pokemon-detail-name">
                  <div className="image-placeholder">
                    <img
                      src={sprites.front_default}
                      alt={`image of the pokemon ${name}`}
                    />
                  </div>

                  <h1>{name.toUpperCase()}</h1>

                  <div className="image-placeholder">
                    <img
                      src={sprites.back_default}
                      alt={`image of the pokemon ${name}`}
                    />
                  </div>
                </section>
              </>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
};

export default PokemonDetailPage;
