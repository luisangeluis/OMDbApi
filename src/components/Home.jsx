import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useGetBestMoviesOfThisYear from '../hooks/useGetBestMoviesOfThisYear';
import useGetMoviePremieres from '../hooks/useGetMoviePremieres';
import useGetPopularMovies from '../hooks/useGetPopularMovies';
import useGetPopularMoviesKids from '../hooks/useGetPopularMoviesKids';
import Carousel from './Carousel';
import GenreGroup from './GenreGroup';

const Home = () => {
  const [movies] = useGetPopularMovies();
  const [moviePremieres] = useGetMoviePremieres();
  const [popularMoviesKids] = useGetPopularMoviesKids();
  const [bestMoviesThisYear] = useGetBestMoviesOfThisYear();
  useState(() => {}, []);

  return (
    <section className="home">
      <div className="container-fluid">
        <h2>Popular movies</h2>
        <Carousel listToShow={movies} />
        <h2>Movie premieres</h2>
        <Carousel listToShow={moviePremieres} />
        <h2>Popular movies kids</h2>
        <Carousel listToShow={popularMoviesKids} />
        <h2>Best movies this year</h2>
        <Carousel listToShow={bestMoviesThisYear} />
      </div>
    </section>
  );
};

export default Home;
