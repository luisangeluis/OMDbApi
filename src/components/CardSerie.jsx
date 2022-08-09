const CardSerie = ({ item }) => {
  return (
    //TO DO GET THE IMAGE
    <article className="card card-carousel">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        className="img-fluid"
        alt={item.original_title}
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="">{item.overview.substring(0, 100)}...</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </article>
  );
};

export default CardSerie;
