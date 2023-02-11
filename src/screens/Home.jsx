import React, {useEffect, useState} from 'react'
import '../App.css';
import SearchIcon from '../assets/search.svg'
import MovieCard from "./MovieCard";
import {update_movies, update_selected_movie} from '../features/movieSlice';
import {useDispatch, useSelector} from "react-redux";

const API_URL = 'http://www.omdbapi.com?apikey=fc3a080'

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
    dispatch(update_movies({...movies}))
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>Download Movies</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie}/>
              ))}
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

export default Home;