import React from 'react';
import { Link } from 'react-router-dom';
import PopulationDark from '../../assets/population-dark.svg';

const Country = ({name, flag, region, population, capital}) => {
  return (
    <div className='country'>
      <Link to={`/country/${name}`}>
        <img src={flag} />
        <h3><strong>Name:</strong> {name}</h3>
        <p><strong>Population: </strong> {population.toLocaleString('en-US')}</p>
        <p><strong>Region:</strong> {region}</p>
        <p><strong>Capital:</strong> {capital}</p>
      </Link>
    </div>
  )
}

export default Country