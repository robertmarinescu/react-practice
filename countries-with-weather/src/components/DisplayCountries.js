import React from "react";
import Country from "./Country";

const DisplayCountries = ({
  newCountry,
  filteredCountries,
  displayOneOrManyCountries,
}) => {
  if (!newCountry) return <p>Search for countries</p>;
  if (newCountry) {
    if (filteredCountries.length === 1)
      return <Country country={filteredCountries[0]} />;
    if (filteredCountries.length > 10) {
      return <p>Too many countries</p>;
    } else {
      return displayOneOrManyCountries();
    }
  }
};

export default DisplayCountries;
