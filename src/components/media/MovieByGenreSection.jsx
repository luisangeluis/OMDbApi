import axios from 'axios';
import React, { useEffect, useState } from 'react';
//COMPONENTS
import SwiperCarousel from './SwiperCarousel';

const MovieByGenreSection = ({ genreId }) => {
  const [moviesByGenre, setMoviesByGenre] = useState();

  useEffect(() => {
    if (genreId) {
      setStateGenre(genreId, setMoviesByGenre);
    }
  }, [genreId]);
  const getByGenre = async (genreId) => {
    try {
      const data = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=b0dd442bf37e49eecbb517b186e6f5ee&language=en-US&with_genres=${genreId}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const setStateGenre = async (genreId, setState) => {
    getByGenre(genreId, setState)
      .then((res) => setState(res.data.results))
      .catch((error) => console.log(error));
  };

  return (
    <section className="media-view flex-grow-1">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SwiperCarousel listToShow={moviesByGenre} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieByGenreSection;
