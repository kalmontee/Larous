import classes from "./SearchInput.module.css";
import { Button } from "@material-ui/core";

const SearchInput = (props) => {
  return (
    <form className={classes.FormControl} onSubmit={props.formSubmit}>
      <input
        className={classes.Input}
        placeholder="Search for beers.."
        type="search"
        name={props.name}
        onChange={props.changeHandler}
      />

      {/* Material UI Button */}
      <Button type="submit" size="large" variant="contained" color="primary">
        Search
      </Button>
    </form>
  );
};

export default SearchInput;
