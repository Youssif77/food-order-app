import classes from "./Model.module.css";

const Backrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModelOverlay = (props) => {
  return (
    <div className={classes.model}>
      <div className={classes.content}>{}</div>;
    </div>
  );
};

const Model = () => {
  return <></>;
};

export default Model;
