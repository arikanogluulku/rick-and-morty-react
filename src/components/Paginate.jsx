import React from 'react';
import ReactPaginate from 'react-paginate';

function Paginate(props) {
  const { totalPage, currentPage, handlePageChange } = props;

  return (
    <div className="pagination__container">
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        pageCount={totalPage}
        marginPagesDisplayed={2}
        onPageActive={currentPage}
        onPageChange={handlePageChange}
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

export default Paginate;
