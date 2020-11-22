import Button from "@material-ui/core/Button";
import classes from "./Beers.module.css";

const BeersCard = (props) => {
  return (
    <div className={classes.BeersCard}>
      <div className={classes.Container}>
        <aside className={classes.aside}>
          <img src={props.img} alt={props.name} className={classes.image} />
          <div className={classes.Description}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.brewersTip}</p>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BeersCard;