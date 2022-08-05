import React from 'react';

const CardMovie = ({ item }) => {
  //TO DO GET THE IMAGE
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.overview}</p>
      </div>
    </div>
  );
};

export default CardMovie;
