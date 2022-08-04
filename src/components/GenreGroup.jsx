import React from 'react';

const GenreGroup = ({ genre }) => {
  // console.log(genre);
  return (
    <div className="genre-group">
      <div className="container">{genre.name}</div>
    </div>
  );
};

export default GenreGroup;
