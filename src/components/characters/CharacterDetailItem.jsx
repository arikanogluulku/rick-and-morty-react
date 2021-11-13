import React from 'react';
import PropTypes from 'prop-types';

function CharacterDetailItem({ info }) {
  return (
    <>
      <tr>
        <td className="character__table-title">
          {info.title}
        </td>
        <td className="character__table-value">
          {info.icon}
          {info.value}
        </td>
      </tr>
    </>

  );
}
CharacterDetailItem.propTypes = {
  info: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default CharacterDetailItem;
