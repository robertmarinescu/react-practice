import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Weather";

const Country = ({ country }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const capital = country.capital;
    if (capital) {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${capital}`
        )
        .then((response) => {
          console.log(response.data);
          setWeather(response.data);
        });
    }
  }, [country]);

  return (
    <div>
      <h2>{country?.name}</h2>
      <p>
        <b>capital: </b>
        {country?.capital}
      </p>
      <p>
        <b>population: </b>
        {country?.population}
      </p>
      <h3>languages</h3>
      <ul>
        {country?.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={country?.flag} width="100" height="100" alt="Loading ..." />

      <Weather country={country} weather={weather} />
    </div>
  );
};

export default Country;
