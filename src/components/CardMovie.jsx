import React, { useEffect, useState } from 'react';

const CardMovie = ({ item, description }) => {
  const [showDescription, setShowDescription] = useState(true);

  useEffect(() => {
    setShowDescription(description);
  }, [description]);

  return (
    <article
      className="card swiper-slide"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item.poster_path})`,
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{showDescription ? item.overview : ''}</p>
        {/* <p className="card-text">{item.overview}</p> */}
      </div>
    </article>
  );
};

export default CardMovie;
