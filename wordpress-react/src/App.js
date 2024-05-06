
import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import PostList from './components/PostList';
import './App.css';
function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (posts) => {
    setSearchResults(posts); 
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog di WordPress</h1>
        <SearchForm onSearch={handleSearch} /> 
        <PostList posts={searchResults} />
      </header>
    </div>
  );
}

export default App;
