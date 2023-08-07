import React from 'react';

const Header = ({search, setSearch}) => {
  return (
    <div>
    <h1>Countries</h1>
    <input
      type="text"
      placeholder="Search for a country..."
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
  </div>
  )
}

export default Header