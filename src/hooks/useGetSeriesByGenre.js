import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useGetSeriesByGenre = (genreId) => {
  const [series, setSeries] = useState();

  useEffect(() => {
    getByGenre();
  }, [genreId]);

  const getByGenre = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=b0dd442bf37e49eecbb517b186e6f5ee&language=en-US&with_genres=${genreId}`
      )
      .then((res) => {
        // console.log(res);
        let series = res.data.results;
        setSeries(series);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return [series];
};

export default useGetSeriesByGenre;
