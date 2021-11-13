import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Locations, MenuTitle, Paginate } from '../components';
import { fetchLocations } from '../store/actions/locationActions';

function Location() {
  const locationsState = useSelector((state) => state.locations);
  const { currentPage, totalPage, locations } = locationsState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocations(currentPage));
  }, [dispatch, currentPage]);
  const paginationInfo = {
    totalPage,
    currentPage,
    clickFunc: 'location',
  };

  return (
    <div>
      <MenuTitle info="locations" />
      <Locations data={locations} />
      <Paginate info={paginationInfo} />
    </div>
  );
}

export default Location;
