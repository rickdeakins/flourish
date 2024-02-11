import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Function to handle user input
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  // Function to handle search action
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the onSearch callback function with the current query
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search genres here"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
