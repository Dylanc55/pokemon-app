import classes from "./Home.module.css";

const HomePage = () => {
  return (
    <section className={classes.home}>
      <img src="pokemon.svg" alt="" className={classes.image} />
      <h1 className={classes.title}>Welcome!</h1>
      <p className={classes.detail}>Browse all the original Pokémon</p>
    </section>
  );
};

export default HomePage;
