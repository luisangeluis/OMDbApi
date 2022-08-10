import React, { useRef } from 'react';
import CardMovie from './CardMovie';
import CardSerie from './CardSerie';

const Carousel = ({ listToShow }) => {
  const carousel = useRef(null);
  const carouselContainer = useRef(null);

  const goToLeft = () => {
    let carouselWidth = carousel.current.offsetWidth;
    carousel.current.scrollLeft -= carouselWidth;
  };
  const goToright = () => {
    let carouselWidth = carousel.current.offsetWidth;
    carousel.current.scrollLeft += carouselWidth;
  };

  window.addEventListener('resize', () => {
    carousel.current.scrollLeft = 0;
  });

  return (
    <div className="col-12">
      <section className="carousel" ref={carouselContainer}>
        <h2></h2>
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
