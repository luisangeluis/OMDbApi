import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useGetPopularMovies from '../hooks/useGetPopularMovies';
import Carousel from './Carousel';
import GenreGroup from './GenreGroup';

const Home = () => {
  const [movies] = useGetPopularMovies();
  useState(() => {}, []);

  return (
    <section className="home">
      <div className="container-fluid">
        <div>
          <Carousel listToShow={movies} />
        </div>
      </div>
    </section>
  );
};

export default Home;
