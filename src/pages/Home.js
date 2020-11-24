import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SearchInput from "../components/SearchInput/SearchInput";
import BeersCard from "../components/Beers/Beers";
import axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";

const classes = {
  BeerSection: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "0px",
    gridAutoRows: "minmax(100px, auto)",
    margin: "0 50px",
  },
};

const Home = () => {
  const [value, setValue] = useState("");
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers`)
      .then((res) => setBeers(res.data))
      .catch((err) => console.log(err)); // pop an alert for error
  }, []);

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <article>
      <SearchInput
        name={value}
        formSubmit={(event) => formSubmitHandler(event)}
        changeHandler={(e) => setValue(e.target.value)}
      />
      <section style={classes.BeerSection}>
        {beers.map((beer) => (
          <Link key={beer.id} to={"/beer/" + beer.id}>
            <BeersCard
              key={beer.id}
              img={beer.image_url}
              title={beer.name}
              description={beer.description}
            />
          </Link>
        ))}
      </section>
    </article>
  );
};

export default Home;
