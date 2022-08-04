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

  // console.log(genres);

  return (
    <section className="home">
      <div className="container">
        {genres &&
          genres.map((genre) => <GenreGroup genre={genre} key={genre.id} />)}
        <h2>HOME</h2>
      </div>
    </section>
  );
};

export default Home;
