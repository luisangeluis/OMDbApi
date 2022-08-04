import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const genres = useSelector((state) => state.genres);

  useState(() => {
    if (genres) {
      console.log('hola');
    }
  }, []);

  console.log(genres);

  return (
    <section className="home">
      <div className="container">
        <h2>HOME</h2>
      </div>
    </section>
  );
};

export default Home;
