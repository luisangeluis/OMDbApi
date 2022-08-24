import React, { useEffect, useState } from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedGroup } from '../../store/slices/searchedGroup.slice';
//Components
import CardMedia from '../media/CardMedia';

const SearchedGroup = ({ search }) => {
  const dispatch = useDispatch();
  const searchitems = useSelector((state) => state.searchedGroup);

  useEffect(() => {
    if (search) {
      dispatch(getSearchedGroup(search));
    }
  }, [search]);

  return (
    <div className="searched-group row">
      <div className="col-12">
        <div className="row">
          {searchitems?.length ? (
            searchitems.map((item) => (
              <div className="col-md-6 col-lg-4 my-2 my-md-3">
                <CardMedia item={item} key={item.id} description={true} />
              </div>
            ))
          ) : (
            <div>Sin resultados</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchedGroup;
