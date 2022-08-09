import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetBestMoviesOfThisYear = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    useGetBestThisYear();
  }, []);

  const useGetBestThisYear = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?primary_release_year=2010&sort_by=vote_average.desc&api_key=b0dd442bf37e49eecbb517b186e6f5ee`
      )
      .then((res) => {
        // console.log(res.data);
        let movies = res.data.results;
        setMovies(movies);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return [movies];
};

export default useGetBestMoviesOfThisYear;
