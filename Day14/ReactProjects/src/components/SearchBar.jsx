// src/components/SearchBar.js
import React, { useState } from 'react';
import { debounce } from 'lodash.debounce';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = debounce((value) => {
    onSearch(value);
  }, 300);

  return (
    <input
      type="text"
      placeholder="Search posts..."
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
        handleSearch(e.target.value);
      }}
    />
  );
};

export default SearchBar;