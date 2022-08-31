import React, { useEffect, useState } from 'react';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getGenres } from '../../store/slices/genres.slice';
import { useParams } from 'react-router-dom';
import useGetMediaByGenre from '../../hooks/useGetMediaByGenre';
//COMPONENTS
import SwiperCarousel from './SwiperCarousel';

const MediaView = () => {
  const { mediaType } = useParams();
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const [animationMedia] = useGetMediaByGenre(mediaType, genres[0]?.id);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  console.log(genres);
  console.log(animationMedia);

  return (
    <section className="media-view flex-grow-1">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <SwiperCarousel listToShow={animationMedia} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaView;
