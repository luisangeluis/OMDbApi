import React from 'react';
import { useParams } from 'react-router-dom';
import useGetDetailMedia from '../../hooks/useGetDetailMedia';

const DetailMediaTv = () => {
  const { id } = useParams();

  const apiKey = 'b0dd442bf37e49eecbb517b186e6f5ee';
  const baseUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`;

  const [detail] = useGetDetailMedia(baseUrl);

  return (
    <section className="container detail flex-grow-1">
      <h2 className="text-center my-2 my-md-3">{detail.name}</h2>
      <div className="row">
        <div className="col-md-4">
          <article className="card">
            <img
              src={`https://image.tmdb.org/t/p/w500/${detail?.poster_path}`}
              alt={`image ${detail?.title}`}
            />
          </article>
        </div>
        <div className="col-md-8"></div>
      </div>
    </section>
  );
};

export default DetailMediaTv;
