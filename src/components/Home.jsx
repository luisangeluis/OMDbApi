import React, { useState } from 'react';
import useGetBestMoviesOfThisYear from '../hooks/useGetBestMoviesOfThisYear';
import useGetMoviePremieres from '../hooks/useGetMoviePremieres';
import useGetPopularMovies from '../hooks/useGetPopularMovies';
import useGetPopularMoviesKids from '../hooks/useGetPopularMoviesKids';
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
      <Hero moviePremieres={moviePremieres} />
      <section className="container">
        <h2 className="subtitle-one my-2 my-md-3">Popular movies</h2>
        <SwiperCarousel listToShow={movies} />
        <h2 className="subtitle-one my-2 my-md-3">Movie premieres</h2>
        <SwiperCarousel listToShow={moviePremieres} />
        <h2 className="subtitle-one my-2 my-md-3">Popular movies kids</h2>
        <SwiperCarousel listToShow={popularMoviesKids} />
        <h2 className="subtitle-one my-2 my-md-3">Best movies this year</h2>
        <SwiperCarousel listToShow={bestMoviesThisYear} />
      </section>
    </main>
  );
};

export default Home;
