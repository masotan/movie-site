import React, { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';

// 10f5b6b7

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=10f5b6b7';


const App = () => {

  const [movies, setMovies] = useState([]);
  
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search); 
  }
  
  useEffect(() => {
    searchMovies('Pokemon');
  }, [])

  return (
    <div className='app'>

    <h1>Not Netflix</h1>
   
    <div className='search'>
      <input 
        placeholder='Search for movies' 
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}}
        />

        <img  
          src={SearchIcon}
          alt="search"
          onClick={(e) => {searchMovies(searchTerm)}}
        />
    </div>

{
  movies?.length > 0 ? (
      <div className="container">
      {
      movies.map
      (
        (movies) => (<MovieCard prop={movies}/>)
      )
      }
       </div>
    ) 
    : (
      <div className="empty">
        <h2>No movies found</h2>
        </div>

    )
}

   
    </div>
  );
}

export default App;