import React from 'react';

const CardMovie = ({ item }) => {
  //TO DO GET THE IMAGE
  return (
    <article
      className="card swiper-slide"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item.poster_path})`,
      }}
    >
      {/* <img
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        className="img-fluid"
        alt={item.original_title}
      /> */}
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        {/* <p className="">{item.overview.substring(0, 100)}...</p> */}
      </div>
    </article>
  );
};

export default CardMovie;
