import React, { useEffect, useState } from 'react';

const Hero = ({ moviePremieres }) => {
  const [movieToShow, setMovieToShow] = useState();
  let randomValue;
  //TO DO SE PUEDE HACER ALGO CON LA UBICACION?
  if (moviePremieres) {
    let min = 0;
    let max = moviePremieres.length - 1;
    randomValue = Math.floor(Math.random() * (max - min + 1) + min);
  }
  useEffect(() => {
    if (moviePremieres) {
      setMovieToShow(moviePremieres[randomValue]);
      console.log(moviePremieres);
    }
  }, [moviePremieres]);

  // console.log(movieToShow);
  // console.log(randomValue);

  return (
    <div className="hero">
      <div
        className="container-fluid hero-container"
        style={{
          background: `linear-gradient(#00000099, #00000099),url(https://image.tmdb.org/t/p/w500/${movieToShow?.backdrop_path}) no-repeat center /cover`,
        }}
      ></div>
    </div>
  );
};

export default Hero;
