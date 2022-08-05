import React from 'react';
import CardMovie from './CardMovie';
import CardSerie from './CardSerie';

const Carousel = ({ listToShow }) => {
  return (
    <div className="carousel col-12">
      {listToShow &&
        listToShow.map((item) =>
          item.title ? (
            <CardMovie item={item} key={item.id} />
          ) : (
            <CardSerie item={item} key={item.id} />
          )
        )}
    </div>
  );
};

export default Carousel;
