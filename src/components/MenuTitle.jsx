import React from 'react';
import PropTypes from 'prop-types';

function MenuTitle(props) {
  return (
    <div className="menu__header">
      <h1 className="menu__header-title">{props.info}</h1>
    </div>
  );
}

MenuTitle.propTypes = {
  info: PropTypes.string.isRequired,
};
export default MenuTitle;
