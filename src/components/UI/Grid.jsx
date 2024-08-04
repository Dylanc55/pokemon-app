import classes from "./Grid.module.css";

const Grid = ({ children, className, ...props }) => {
  let styles = classes.grid;
  if (className) styles += " " + className;

  return (
    <ul className={styles} {...props}>
      {children}
    </ul>
  );
};

export default Grid;
