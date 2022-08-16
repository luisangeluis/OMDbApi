import React from 'react';
import { useNavigate } from 'react-router-dom';

const InputSearch = () => {
  const navigate = useNavigate();
  const {} = useForm();

  const goToSearch = () => {};

  return (
    <div className="card bg-transparent-one">
      <div className="card-body">
        <form className="">
          <div class="input-group">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Type the movie to search"
            />
            <button type="submit" class="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputSearch;
