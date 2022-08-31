import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useGetMediaByGenre from '../../hooks/useGetMediaByGenre';
//COMPONENTS
import SwiperCarousel from './SwiperCarousel';
const MediaView = () => {
  const { mediaType } = useParams();
  const genres = useSelector((state) => state.genres);
  const [animationMedia] = useGetMediaByGenre(mediaType);

  console.log(mediaType);
  console.log(genres);

  return (
    <section className="media-view flex-grow-1">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SwiperCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaView;
