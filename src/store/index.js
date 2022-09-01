import { configureStore } from '@reduxjs/toolkit';
import genresTv from './slices/genresTv.slice';
import searchedGroup from './slices/searchedGroup.slice.js';
import genresMovie from './slices/genresMovie.slice';

export default configureStore({
  reducer: {
    genresTv,
    searchedGroup,
    genresMovie,
  },
});
