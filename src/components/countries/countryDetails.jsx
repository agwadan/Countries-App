// CountryDetails.js
import React, { useEffect, useState , useContext} from 'react';
import { useParams } from 'react-router-dom';
import './country.css';
import ThemeContext from '../../theme-context';

const CountryDetails = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await res.json();
      setCountry(data[0]);
    }
    fetchCountry();
  }, [name]);

  if (!country) {
    return <p>Loading...</p>;
  }

  return (
    <div className={` ${theme} country-details`}>
      <img src={country.flags.png} alt={country.name.common} />
      <h1>{country.name.common}</h1>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital[0]}</p>
    </div>
  )
}

export default CountryDetails;
