import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchedGroupSlice = createSlice({
  name: 'searchedGroup',
  initialState: null,
  reducers: {
    setSearchedGroup: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSearchedGroup } = searchedGroupSlice.actions;
export default searchedGroupSlice.reducer;
export const getSearchedGroup = (search) => (dispatch) => {
  return axios
    .get(
      // `https://api.themoviedb.org/3/search/movie?api_key=b0dd442bf37e49eecbb517b186e6f5ee&language=en-US&page=1&include_adult=false&query=${search}`
      `https://api.themoviedb.org/3/search/multi?api_key=b0dd442bf37e49eecbb517b186e6f5ee&language=en-US&page=1&include_adult=false&query=${search}`
    )
    .then((res) => {
      console.log(res.data.results);
      dispatch(setSearchedGroup(res.data.results));
    })
    .catch((error) => console.log(error));
};
