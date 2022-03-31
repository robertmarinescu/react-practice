import React, { useEffect, useState } from "react";
import axios from "axios";
import Country from "./components/Country"
import CountryItem from "./components/CountryItem"
import DisplayCountries from './components/DisplayCountries'

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newCountry, setNewCountry] = useState('');
  const [showCountry, setShowCountry] = useState([]);

  useEffect(() => {
    console.log("effect")
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        console.log(response.data)
        setCountries(response.data)
      })
  }, [])

  const handleSetNewCountry = (event) => {
    setNewCountry(event.target.value)
    setShowCountry([])
  }

  const handleShowCountry = (country) => {
    console.log(country.name, "clicked")
    setShowCountry([country])
  }

  function displayOneOrManyCountries(){
    if(showCountry.length === 1){
      return <Country country={showCountry[0]} />
    } else {
      return (
        <div>
          {
            filteredCountries.map(country => <CountryItem key={country.name} country={country} onClick={() => handleShowCountry(country)}/>)
          }
        </div>
      )
    }
  }

  console.log(process.env.REACT_APP_API_KEY)
  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(newCountry.toLowerCase()))

  return (
    <div>
      <p>find countries <input value={newCountry} onChange={handleSetNewCountry}/></p>
      <DisplayCountries 
        newCountry={newCountry} 
        filteredCountries={filteredCountries} 
        displayOneOrManyCountries={displayOneOrManyCountries}
      />
    </div>
  );
};

export default App;
