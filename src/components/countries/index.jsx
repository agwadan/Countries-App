import React, { useEffect, useState } from 'react';
import Country from './country';

const Countries = ({countries, search}) => {

const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <h1>Countries</h1>
      <div className="countries">
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