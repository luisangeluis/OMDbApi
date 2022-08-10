import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetMoviePremieres = () => {
  const [movies, setMovies] = useState();
  const date = new Date();
  useEffect(() => {
    useGetPremieres();
  }, []);

  const useGetPremieres = () => {
    const year = date.getFullYear();
    let currentMonth = date.getMonth() + 1;
    if (currentMonth.toString().length < 2) {
      currentMonth = '0' + currentMonth;
    }
    let beforeMonth = currentMonth - 1;
    if (beforeMonth.toString().length < 2) {
      beforeMonth = '0' + beforeMonth;
    }
    let day = date.getDate();
    if (day.toString().length < 2) {
      day = '0' + day;
    }

    let currentDate = `${year}-${currentMonth}-${day}`;
    let beforeDate = `${year}-${beforeMonth}-${day}`;

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${beforeDate}&primary_release_date.lte=${currentDate}&api_key=b0dd442bf37e49eecbb517b186e6f5ee`
      )
      .then((res) => {
        // console.log(res);
        let movies = res.data.results;
        setMovies(movies);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return [movies];
};

export default useGetMoviePremieres;
