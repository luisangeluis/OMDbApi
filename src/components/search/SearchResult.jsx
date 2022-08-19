import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SearchResult = () => {
  const { name } = useParams();

  useEffect(() => {
    getResults();
  }, [name]);

  const getResults = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=b0dd442bf37e49eecbb517b186e6f5ee&language=en-US&page=1&include_adult=false&query=${name}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  // console.log(name);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">Search result</div>
      </div>
    </div>
  );
};

export default SearchResult;
