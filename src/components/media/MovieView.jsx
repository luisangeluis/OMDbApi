import axios from 'axios';
import React, { useEffect, useState } from 'react';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
//COMPONENTS
import SwiperCarousel from './SwiperCarousel';

const MovieView = () => {
  const [actionMovie, setActionMovie] = useState();
  const genresMovie = useSelector((state) => state.genresMovie);

  useEffect(() => {
    if (genresMovie) {
      // getByGenre('movie', genresMovie[0].id)
      //   .then((res) => setActionMovie(res.data.results))
      //   .catch((error) => console.log(error));

      getData('movie', genresMovie[0].id);
    }
  }, [genresMovie]);

  console.log(actionMovie);
  const getByGenre = async (mediaType, genreId) => {
    try {
      const movies = await axios.get(
        `https://api.themoviedb.org/3/discover/${mediaType}?api_key=b0dd442bf37e49eecbb517b186e6f5ee&language=en-US&with_genres=${genreId}`
      );
      return movies;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const getByGenr = async (mediaType, genreId) => {
    const data = axios.get(
      `https://api.themoviedb.org/3/discover/${mediaType}?api_key=b0dd442bf37e49eecbb517b186e6f5ee&language=en-US&with_genres=${genreId}`
    );

    return data;
  };

  const getData = async (mediaType, genreId) => {
    const res = await getByGenr(mediaType, genreId);
    console.log(res);
    return res;
  };

  return (
    <section className="media-view flex-grow-1">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <SwiperCarousel listToShow={animationMedia} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieView;
