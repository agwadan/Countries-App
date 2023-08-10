import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import PopulationDark from '../../assets/population-dark.svg';
import PopulationLight from '../../assets/population-light.svg';
import RegionDark from '../../assets/region-dark.svg';
import RegionLight from '../../assets/region-light.svg';
import CapitalDark from '../../assets/capital-dark.svg';
import CapitalLight from '../../assets/capital-light.svg';
import ThemeContext from '../../theme-context';

const Country = ({ name, flag, region, population, capital }) => {
  
  const { theme } = useContext(ThemeContext);

  return (
    <div className='country'>
      <Link to={`/country/${name}`}>
        <img src={flag} alt={`Flag of ${name}`} />
        <h3><strong>Name:&nbsp;</strong> {name}</h3>
        <div className="item">
          <img src={theme === 'light' ? PopulationDark : PopulationLight} alt='population-icon'/>
          <p><strong>Population:&nbsp; </strong> <i>{population.toLocaleString('en-US')}</i></p>
        </div>
        <div className="item">
        <img src={theme === 'light' ? RegionDark : RegionLight} alt='region-icon'/>
        <p><strong>Region:&nbsp;</strong> <i>{region}</i></p>
        </div>
        <div className="item">
        <img src={theme === 'light' ? CapitalDark : CapitalLight} alt='capital-icon'/>
        <p><strong>Capital:&nbsp;</strong> <i>{capital}</i></p>
        </div>
      </Link>
    </div>
  )
}

export default Country