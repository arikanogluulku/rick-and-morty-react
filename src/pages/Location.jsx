import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Locations, MenuTitle, Paginate } from '../components';
import { fetchLocations, setLocationCurrentPage } from '../store/actions/locationActions';

function Location() {
  const locationsState = useSelector((state) => state.locations);
  const { currentPage, totalPage, locations } = locationsState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocations(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (data) => {
    dispatch(setLocationCurrentPage(data.selected + 1));
  };

  return (
    <div>
      <MenuTitle info="locations" />
      <Locations data={locations} />
      <Paginate
        totalPage={totalPage}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default Location;
