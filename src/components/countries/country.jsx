import React from 'react';
import { Link } from 'react-router-dom';
import PopulationDark from '../../assets/population-dark.svg';
import Region from '../../assets/region.svg';
import Capital from '../../assets/capital.svg';

const Country = ({name, flag, region, population, capital}) => {
  return (
    <div className='country'>
      <Link to={`/country/${name}`}>
        <img src={flag} />
        <h3><strong>Name:&nbsp;</strong> {name}</h3>
        <div className="item">
          <img src={PopulationDark}/>
          <p><strong>Population:&nbsp; </strong> <i>{population.toLocaleString('en-US')}</i></p>
        </div>
        <div className="item">
        <img src={Region}/>
        <p><strong>Region:&nbsp;</strong> <i>{region}</i></p>
        </div>
        <div className="item">
        <img src={Capital}/>
        <p><strong>Capital:&nbsp;</strong> <i>{capital}</i></p>
        </div>
      </Link>
    </div>
  )
}

export default Country