const CardSerie = ({ item }) => {
  return (
    //TO DO GET THE IMAGE
    <article className="card card-carousel">
      <div className="card-body">
        <h5 className="">{item.name}</h5>
        <p className="">{item.overview.substring(0, 100)}...</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </article>
  );
};

export default CardSerie;
