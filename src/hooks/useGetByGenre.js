import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useGetByGenre = (genreId) => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    getByGenre();
  }, [genreId]);

  // console.log(genreId);
  const getByGenre = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/find/${genreId}?api_key=b0dd442bf37e49eecbb517b186e6f5ee&language=en-US&external_source=imdb_id`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return [movies];
};

export default useGetByGenre;
