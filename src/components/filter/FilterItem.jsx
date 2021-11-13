import React from 'react';
import PropTypes from 'prop-types';

function FilterItem({ info }) {
  return (
    <div>
      <select className="filter__select">
        {
         info.map((item) => (
           <option key={item}>
             {item}
           </option>
         ))
        }
      </select>
    </div>
  );
}
FilterItem.propTypes = {
  info: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export default FilterItem;
