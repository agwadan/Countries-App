import React, { useEffect, useState , useContext} from 'react';
import Country from './country';
import ThemeContext from '../../theme-context';

const Countries = ({countries, search, region}) => {

const { theme } = useContext(ThemeContext);
const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()) &&
(region ? country.region === region : true))

  return (
    <>
      <div className={`countries ${theme}`}>
        {filteredCountries.map(country => {
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