
import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost/wordpress/wp-json/wp/v2/posts?search=${searchTerm}`);
      const posts = response.data;
      onSearch(posts); 
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Cerca post..." 
      />
      <button type="submit">Cerca</button>
    </form>
  );
}

export default SearchForm;
