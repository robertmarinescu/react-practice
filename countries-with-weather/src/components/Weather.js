import React from "react";

function Weather({ country, weather }) {
  return (
    <div>
      <h2>Weather in {country.capital}</h2>
      <p>
        <b>temperature: </b>
        {weather?.current?.temperature}
      </p>
      <img
        src={weather?.current?.weather_icons[0]}
        width="100"
        height="100"
        alt="Loading..."
      />
      <p>
        <b>wind: </b>
        {weather?.current?.wind_speed} direction {weather?.current?.wind_dir}
      </p>
    </div>
  );
}

export default Weather;
