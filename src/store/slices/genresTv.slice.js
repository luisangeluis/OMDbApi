import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const genresTvSlice = createSlice({
  name: 'genresTv',
  initialState: null,
  reducers: {
    setGenres: (state, action) => {
      return action.payload;
    },
  },
});

export const { setGenres } = genresTvSlice.actions;

export const getGenresTv = () => (dispatch) => {
  return axios
    .get(
      'https://api.themoviedb.org/3/genre/tv/list?api_key=b0dd442bf37e49eecbb517b186e6f5ee&language=en-US'
    )
    .then((res) => {
      // console.log(res.data.genres);
      dispatch(setGenres(res.data.genres));
    })
    .catch((error) => {
      console.log(error);
    });
};

export default genresTvSlice.reducer;
