import React from 'react';
import useGetByGenre from '../hooks/useGetByGenre';

const GenreGroup = ({ genre }) => {
  const [movies] = useGetByGenre(genre.id);
  // console.log(genre);

  // console.log(movies);
  return (
    <div className="genre-group">
      <div className="container">{genre.id}</div>
    </div>
  );
};

export default GenreGroup;
