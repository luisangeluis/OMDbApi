import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import GenreGroup from './GenreGroup';

const Home = () => {
  const genres = useSelector((state) => state.genres);

  useState(() => {
    if (genres) {
      console.log('hola');
    }
  }, []);

  return (
    <section className="home">
      <div className="container">
        {genres &&
          genres.map((genre) => <GenreGroup genre={genre} key={genre.id} />)}
      </div>
    </section>
  );
};

export default Home;
