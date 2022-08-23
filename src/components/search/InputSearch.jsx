import React from 'react';
//ROUTER
import { useNavigate } from 'react-router-dom';
//HOOK FORM
import { useForm } from 'react-hook-form';
//Redux
import { useDispatch } from 'react-redux';
import { getSearchedGroup } from '../../store/slices/searchedGroup.slice';

const InputSearch = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const getSearch = (data) => {
    console.log(data.search);
    let search = data.search;
    dispatch(getSearchedGroup(search));
  };

  return (
    <div className="card bg-transparent-one">
      <div className="card-body">
        <form className="" onSubmit={handleSubmit(getSearch)}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              aria-describedby="search"
              placeholder="Type the movie to search"
              {...register('search', { required: true })}
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputSearch;
