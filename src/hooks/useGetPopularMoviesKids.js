import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetPopularMoviesKids = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    useGetPopularMoviesKids();
  }, []);

  const useGetPopularMoviesKids = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=b0dd442bf37e49eecbb517b186e6f5ee`
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

export default useGetPopularMoviesKids;
