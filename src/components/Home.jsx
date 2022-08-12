import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useGetBestMoviesOfThisYear from '../hooks/useGetBestMoviesOfThisYear';
import useGetMoviePremieres from '../hooks/useGetMoviePremieres';
import useGetPopularMovies from '../hooks/useGetPopularMovies';
import useGetPopularMoviesKids from '../hooks/useGetPopularMoviesKids';
import Carousel from './Carousel';
import GenreGroup from './GenreGroup';
import Hero from './Hero';
import SwiperCarousel from './SwiperCarousel';

const Home = () => {
  const [movies] = useGetPopularMovies();
  const [moviePremieres] = useGetMoviePremieres();
  const [popularMoviesKids] = useGetPopularMoviesKids();
  const [bestMoviesThisYear] = useGetBestMoviesOfThisYear();
  useState(() => {}, []);

  return (
    <main className="home">
      <Hero />
      <section className="container">
        <h2>Popular movies</h2>
        <SwiperCarousel listToShow={movies} />
        <h2>Movie premieres</h2>
        <SwiperCarousel listToShow={moviePremieres} />
        <h2>Popular movies kids</h2>
        <SwiperCarousel listToShow={popularMoviesKids} />
        <h2>Best movies this year</h2>
        <SwiperCarousel listToShow={bestMoviesThisYear} />
      </section>
    </main>
  );
};

export default Home;
