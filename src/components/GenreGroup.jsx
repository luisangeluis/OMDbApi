import React, { useEffect, useState } from 'react';
import useGetMoviesByGenre from '../hooks/useGetMoviesByGenre';
import useGetSeriesByGenre from '../hooks/useGetSeriesByGenre';
import Carousel from './Carousel';

const GenreGroup = ({ genre }) => {
  const [movies] = useGetMoviesByGenre(genre.id);
  const [series] = useGetSeriesByGenre(genre.id);

  const [listToShow, setListToShow] = useState();

  useEffect(() => {
    if (movies && series) {
      setListToShow(movies.concat(series));
    } else if (movies) {
      setListToShow(movies);
    } else if (series) {
      setListToShow(series);
    } else {
      setListToShow();
    }
  }, [movies, series]);

  console.log(listToShow);

  return (
    <div className="genre-group row">
      {genre.name}
      {listToShow && <Carousel listToShow={listToShow} />}
    </div>
  );
};

export default GenreGroup;
