import React from "react";

const CountryItem = ({ country, onClick }) => {
  return (
    <p>
      {country.name} <button onClick={onClick}>show</button>
    </p>
  );
};

export default CountryItem;
