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

  console.log(movieToShow);
  // console.log(randomValue);

  return (
    <section className="hero">
      <div
        className="container-fluid hero-container mb-3 mb-md-4 p-3 p-md-4"
        style={{
          background: `linear-gradient(#00000075, #00000075),url(https://image.tmdb.org/t/p/w500/${movieToShow?.backdrop_path}) no-repeat center /cover`,
        }}
      >
        <div className="row justify-content-left">
          <div className="col-md-6 d-flex align-items-end">
            <article className="card">
              <div className="card-body">
                <h3 className="card-title">{movieToShow?.title}</h3>
                <p className="card-text">{movieToShow?.overview}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
