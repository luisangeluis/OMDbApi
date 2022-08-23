import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//COMPONENTS
import InputSearch from './InputSearch';
import SearchedGroup from './SearchedGroup';

const SearchResult = () => {
  const { name } = useParams();

  // useEffect(() => {
  //   getResults();
  // }, [name]);

  // const getResults = () => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/search/movie?api_key=b0dd442bf37e49eecbb517b186e6f5ee&language=en-US&page=1&include_adult=false&query=${name}`
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // console.log(name);

  return (
    <div className="container-fluid flex-grow-1">
      <div className="row">
        <div className="col-md-4">
          <InputSearch />
        </div>
        <div className="col-md-8">
          <SearchedGroup />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
