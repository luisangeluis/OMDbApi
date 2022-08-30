import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetDetailMedia from '../../hooks/useGetDetailMedia';
import useGetMediaByGenre from '../../hooks/useGetMediaByGenre';
import CardMedia from './CardMedia';

const DetailMediaMovie = () => {
  const { id } = useParams();
  const { type } = useParams();
  const apiKey = 'b0dd442bf37e49eecbb517b186e6f5ee';
  const baseUrl = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=en-US`;
  const [detail] = useGetDetailMedia(baseUrl);
  const [mediaSameGenre] = useGetMediaByGenre(type, detail?.genres[0]);
  const [filteredMediaSameGenre, setFilteredMediaSameGenre] = useState();

  // console.log(detail);
  // console.log(type);
  // console.log(mediaSameGenre);

  useEffect(() => {
    if (mediaSameGenre) {
      let filteredMedia = mediaSameGenre.filter(
        (media) => media.title != detail.title || media.name != detail.name
      );
      console.log(filteredMedia);
      setFilteredMediaSameGenre(filteredMedia);
    }
  }, [mediaSameGenre]);

  return (
    <section className="container detail flex-grow-1">
      <h2 className="text-center my-2 my-md-3">{detail?.title}</h2>
      <div className="row mb-3 mb-md-5">
        <div className="col-md-4">
          <article className="card">
            <img
              src={`https://image.tmdb.org/t/p/w500/${detail?.poster_path}`}
              alt={`image ${detail?.title}`}
            />
          </article>
        </div>
        <div className="col-md-8">
          <div className="card my-1 my-md-2">
            <div className="card-body">
              <h3>Overview</h3>
              <div className="fw-bold">
                Release date <span>{detail?.release_date}</span>
              </div>
              <p className="card-text">{detail?.overview}</p>
            </div>
          </div>
          <div className="card my-1 my-md-2">
            <div className="card-body">
              <h3 className="card-title">Genres</h3>
              <div>
                {detail?.genres.map((genre) => (
                  <span className="mx-2 mx-md-3">{genre.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row related-media_section">
        <h3>Related movies</h3>
        {filteredMediaSameGenre?.map((movie) => (
          <div className="col-md-4 my-2 my-md-3">
            {/* <div
              className="card my-2 my-md-3"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                minHeight: '15rem',
              }}
            >
              <div className="card-body">
                <h3 className="card-title">{movie.title}</h3>
              </div>
            </div> */}
            <CardMedia item={movie} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailMediaMovie;
