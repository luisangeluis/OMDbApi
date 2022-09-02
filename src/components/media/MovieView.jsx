//REDUX
import { useSelector } from 'react-redux';
import MovieByGenreSection from './MovieByGenreSection';

const MovieView = () => {
  const genresMovie = useSelector((state) => state.genresMovie);

  console.log(genresMovie);
  return (
    <section className="media-view flex-grow-1">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {genresMovie &&
              genresMovie.map((genre) => (
                <MovieByGenreSection genreId={genre.id} key={genre.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieView;
