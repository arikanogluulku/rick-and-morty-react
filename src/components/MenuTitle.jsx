import React from 'react';

function MenuTitle({ info }) {
  return (
    <div className="menu__header">
      <h1 className="menu__header-title">{info}</h1>
    </div>
  );
}

export default MenuTitle;
