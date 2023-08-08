import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({name, flag, region, population, capital}) => {
  return (
    <div className='country'>
      <Link to={`/country/${name}`}>
        <img src={flag} />
        <h3>Name: {name}</h3>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </Link>
    </div>
  )
}

export default Country