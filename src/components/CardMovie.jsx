import React from 'react';

const CardMovie = ({ item }) => {
  //TO DO GET THE IMAGE
  return (
    <article className="card card-carousel">
      <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
      <div className="card-body">
        <h5 className="">{item.title}</h5>
        <p className="">{item.overview.substring(0, 100)}...</p>
      </div>
    </article>
  );
};

export default CardMovie;
