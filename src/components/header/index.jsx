import React from 'react';

const Header = ({ search, setSearch, region, setRegion }) => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  return (
    <div>
    <h1>Countries</h1>
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
  )
}

export default Header