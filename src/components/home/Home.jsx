import React, { useEffect, useState } from 'react';
//CUSTOM HOOKS
import useGetBestMoviesOfThisYear from '../../hooks/useGetBestMoviesOfThisYear';
import useGetMoviePremieres from '../../hooks/useGetMoviePremieres';
import useGetPopularMovies from '../../hooks/useGetPopularMovies';
import useGetPopularMoviesKids from '../../hooks/useGetPopularMoviesKids';
//COMPONENTS
import Hero from './Hero';
import SwiperCarousel from '../media/SwiperCarousel';
//REDUX
import { useDispatch } from 'react-redux';
import { getGenres } from '../../store/slices/genres.slice';

const Home = () => {
  const [movies] = useGetPopularMovies();
  const [moviePremieres] = useGetMoviePremieres();
  const [popularMoviesKids] = useGetPopularMoviesKids();
  const [bestMoviesThisYear] = useGetBestMoviesOfThisYear();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

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
