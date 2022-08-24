import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//COMPONENTS
import InputSearch from './InputSearch';
import SearchedGroup from './SearchedGroup';

const SearchResult = () => {
  const { name } = useParams();

  useEffect(() => {}, [name]);

  return (
    <div className="container-fluid flex-grow-1">
      <div className="row">
        <div className="col-md-4">
          <InputSearch />
        </div>
        <div className="col-md-8">
          <SearchedGroup search={name} />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
