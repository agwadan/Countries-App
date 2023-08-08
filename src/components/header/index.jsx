import React, { useContext } from 'react';
import ThemeContext from '../../theme-context';
import './header.css';
import Moon from '../../assets/moon.svg';
import Sun from '../../assets/sun.svg';

const Header = ({ search, setSearch, region, setRegion }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  
  return (
    <header className={theme}>
      <div className="top-row flex-row">
        <h1>Where in the world?</h1>
        <button onClick={toggleTheme}>
          <img src={ theme === 'light' ? Moon : Sun} /> {theme === 'light' ? 'Turn off the ' : 'Turn on the '} lights
      </button>
      </div>

      <div className="bottom-row flex-row">

        <input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          />
          
        <select value={region} onChange={e => setRegion(e.target.value)}>
            <option value="">Filter By Region</option>
            {
              regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))
            }
        </select>
      </div>

      
  </header>
  )
}

export default Header