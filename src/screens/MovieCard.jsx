import React from 'react';
import {useNavigate} from "react-router";
import {update_selected_movie} from "../features/movieSlice";
import {useDispatch} from "react-redux";

const MovieCard = ({ movie}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="movie" onClick={() => {dispatch(update_selected_movie({...movie}));
      navigate(`../form`, {state: {movie}});}}>
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard