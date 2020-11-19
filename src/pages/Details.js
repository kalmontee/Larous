import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BeersCard from "../components/Beers/Beers";
import axios from "axios";

const classes = {
  BeerSection: {
    width: "50%",
    margin: "0 auto",
  },
};

const BeerDetails = () => {
  const [beers, setBeers] = useState([]);

  // useParams returns an object of key/value pairs of URL parameters.
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers/${id}`)
      .then((res) => {
        setBeers(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err)); // pop an alert for error
  }, []);

  return (
    <section style={classes.BeerSection}>
      {beers.map((beer) => (
        <BeersCard
          key={beer.id}
          img={beer.image_url}
          title={beer.name}
          description={beer.description}
          brewersTip={beer.brewers_tips}
        />
      ))}
    </section>
  );
};

export default BeerDetails;
