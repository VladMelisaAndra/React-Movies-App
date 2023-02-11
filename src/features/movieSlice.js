import {createSlice} from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: 'movie_slice',
  initialState: {
    movies: {},
    selected_movie: {}
  },
  reducers: {
    update_movies: (state, action) => {
      state.movies = {...state.movies, ...action.payload}
    },
    clear_movies: (state) => {
      state.movies = {}
    },
    update_selected_movie: (state, action) => {
      state.selected_movie = {...state.selected_movie, ...action.payload}
    },
    clear_selected_movie: (state) => {
      state.selected_movie = {}
    }
  }
})

export const {update_movies, clear_movies, update_selected_movie, clear_selected_movie} = movieSlice.actions

export default movieSlice.reducer