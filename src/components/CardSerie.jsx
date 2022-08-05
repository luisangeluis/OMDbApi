const CardSerie = ({ item }) => {
  return (
    //TO DO GET THE IMAGE
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.overview}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default CardSerie;
