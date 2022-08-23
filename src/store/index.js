import { configureStore } from '@reduxjs/toolkit';
import genres from './slices/genres.slice';
import searchedGroup from './slices/searchedGroup.slice.js';

export default configureStore({
  reducer: {
    genres,
    searchedGroup,
  },
});
