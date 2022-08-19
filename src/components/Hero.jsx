import React, { useEffect, useState } from 'react';
import MainInputSearch from './search/MainInputSearch';

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
          background: `linear-gradient(to left,transparent,transparent),url(https://image.tmdb.org/t/p/w500/${movieToShow?.backdrop_path}) no-repeat center /cover`,
        }}
      >
        <div className="row">
          <div className="col-12 d-flex flex-column">
            <div className="row flex-grow-1">
              <div className="col-md-6">
                <article className="card bg-transparent-one ">
                  <div className="card-body">
                    <h3 className="card-title text-white">
                      {movieToShow?.title}
                    </h3>
                    <p className="card-text fw-bold">{movieToShow?.overview}</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="row flex-grow-1 justify-content-center">
              <div className="col-md-6">
                <MainInputSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
