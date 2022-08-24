import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CardMedia = ({ item, description }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/media/${item.id}`);
  };

  return (
    <article
      className="card swiper-slide"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item.poster_path})`,
      }}
    >
      <button className="btn" onClick={goToDetail}>
        <div className="card-body">
          <h5 className="card-title">{item.title ? item.title : item.name}</h5>
          <p className="card-text">{description ? item.overview : ''}</p>
        </div>
      </button>
    </article>
  );
};

export default CardMedia;
