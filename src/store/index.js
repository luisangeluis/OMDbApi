import { configureStore } from '@reduxjs/toolkit';
import genres from './slices/genres.slice';

export default configureStore({
  reducer: {
    genres,
  },
});
