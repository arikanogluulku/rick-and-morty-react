import React from 'react';
import './style.scss';

function MenuTittle({ info }) {
  return (
    <div className="menu__header">
      <h1 className="menu__header-tittle">{info}</h1>
    </div>
  );
}

export default MenuTittle;
