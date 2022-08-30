import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useGetMediaByGenre = (type, genreId) => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    if (genreId) {
      getByGenre();
    }
  }, [genreId]);

  const getByGenre = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/${type}?api_key=b0dd442bf37e49eecbb517b186e6f5ee&language=en-US&with_genre=${genreId}`
      )
      .then((res) => {
        console.log(res);
        let movies = res.data.results;
        setMovies(movies);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return [movies];
};

export default useGetMediaByGenre;
