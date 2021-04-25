import React from 'react';
import './Search.css';

const Search = ({ placeholder, filter }) => {
  return (
    <input
      className="search"
      type="text"
      name="search"
      placeholder={placeholder}
      onChange={filter}
    />
  )
}

export default Search;