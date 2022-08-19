import React from 'react';
//ROUTER
import { useNavigate } from 'react-router-dom';
//HOOK FORM
import { useForm } from 'react-hook-form';

const MainInputSearch = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const goToSearch = (data) => {
    if (data.search) {
      navigate(`/search/${data.search}`);
    }
  };

  return (
    <div className="card bg-transparent-one">
      <div className="card-body">
        <form className="" onSubmit={handleSubmit(goToSearch)}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              aria-describedby="search"
              placeholder="Type the movie to search"
              {...register('search', { required: true })}
            />
            <button onClick={goToSearch} className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainInputSearch;
