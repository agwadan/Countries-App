import React, { useContext } from 'react';
import ThemeContext from '../../theme-context';


const Header = ({ search, setSearch, region, setRegion }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  
  return (
    <div className={theme}>
    <h1>Where in the world?</h1>
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

      <button onClick={toggleTheme}>
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
  </div>
  )
}

export default Header