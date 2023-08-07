import React, { useEffect, useState } from 'react';
import Country from './country';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCountries = async () => {
      const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital');
      const fetchedCountries = await res.json();
      console.log(fetchedCountries);
      setCountries(fetchedCountries);
      setLoading(false);
    }
    getCountries();
  },[])
  return (
    <>
      <h1>Countries</h1>
      <div className="countries">
        {countries.map(country => {
          return <Country
          key={country.name.common}
          name={country.name.common}
          region={country.region}
          flag={country.flags.png}
          population={country.population}
          capital={country.capital[0]}
          />
        } )}
      </div>
    </>
  )
}

export default Countries;