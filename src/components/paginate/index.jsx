import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setCharacterCurrentPage } from '../../store/actions/characterActions';
import { setLocationCurrentPage } from '../../store/actions/locationActions';
import { setEpisodeCurrentPage } from '../../store/actions/episodeActions';

function Paginate(props) {
  const dispatch = useDispatch();

  const handlePageClick = (data) => {
    if (props.info.clickFunc === 'character') {
      dispatch(setCharacterCurrentPage(data.selected + 1));
    }
    if (props.info.clickFunc === 'location') {
      dispatch(setLocationCurrentPage(data.selected + 1));
    }
    if (props.info.clickFunc === 'episode') {
      dispatch(setEpisodeCurrentPage(data.selected + 1));
    }
  };

  return (
    <div className="pagination__container">
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        pageCount={props.info.totalPage}
        marginPagesDisplayed={2}
        onPageActive={props.info.CurrentPage}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        previousClassName="pagination__page"
        breakClassName="pagination__page"
        nextClassName="pagination__page"
        pageClassName="pagination__page"
        activeClassName="pagination__page-active"
      />
    </div>
  );
}
Paginate.propTypes = {
  info: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default Paginate;
