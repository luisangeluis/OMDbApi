import React, { useRef } from 'react';
import CardMovie from './CardMovie';
import CardSerie from './CardSerie';

const Carousel = ({ listToShow }) => {
  const carousel = useRef(null);

  console.log(carousel);

  const goToLeft = () => {
    let carouselWidth = carousel.current.offsetWidth;

    carousel.current.scrollLeft -= carouselWidth * 0.8;
  };
  const goToright = () => {
    let carouselWidth = carousel.current.offsetWidth;
    console.log(carouselWidth);
    carousel.current.scrollLeft += carouselWidth * 0.8;
  };

  return (
    <div className="col-12">
      <section className="carousel">
        <button className="btn carousel_btn-left" onClick={goToLeft}>
          <i className="fa-solid fa-circle-left"></i>
        </button>
        <div className="carousel-body" ref={carousel}>
          <div className="carousel-movies">
            {listToShow &&
              listToShow.map((item) =>
                item.title ? (
                  <CardMovie item={item} key={item.id} />
                ) : (
                  <CardSerie item={item} key={item.id} />
                )
              )}
          </div>
        </div>
        <button className="btn carousel_btn-right" onClick={goToright}>
          <i className="fa-solid fa-circle-right"></i>
        </button>
      </section>
    </div>
  );
};

export default Carousel;
