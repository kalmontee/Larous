import { useState, useEffect } from "react";

import SearchInput from "../components/SearchInput/SearchInput";
import BeersCard from "../components/Beers/Beers";
import axios from "axios";

const Home = () => {
  const [value, setValue] = useState("");
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers`)
      .then((res) => setBeers(res.data))
      .catch((err) => console.log(err)); // pop an alert for error
  }, []);

  // const loadData = async () => {
  //   const response = await fetch("https://api.punkapi.com/v2/beers");
  //   const data = await response.json();
  //   setBeers(data);
  // }

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <SearchInput
        name={value}
        formSubmit={(event) => formSubmitHandler(event)}
        changeHandler={(e) => setValue(e.target.value)}
      />
      {beers.map((beer) => (
        <BeersCard
          key={beer.id}
          img={beer.image_url}
          title={beer.name}
          description={beer.description}
        />
      ))}
    </div>
  );
};

export default Home;
