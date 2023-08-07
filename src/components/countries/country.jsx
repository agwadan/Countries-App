import React from 'react'

const Country = ({name, flag, region, population, capital}) => {
  return (
    <div className='country'>
      <img src={flag} />
      <h3>Name: {name}</h3>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
    </div>
  )
}

export default Country