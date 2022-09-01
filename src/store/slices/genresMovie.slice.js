import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const genresMovieSlice = createSlice({
  name: 'genresMovie',
  initialState: null,
  reducers: {
    setGenresMovie: (state, action) => {
      return action.payload;
    },
  },
});

export const { setGenresMovie } = genresMovieSlice.actions;

export const getGenresMovie = () => (dispatch) => {
  return axios
    .get(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=b0dd442bf37e49eecbb517b186e6f5ee&language=en-US'
    )
    .then((res) => {
      // console.log(res.data.genres);
      dispatch(setGenresMovie(res.data.genres));
    })
    .catch((error) => {
      console.log(error);
    });
};

export default genresMovieSlice.reducer;
