/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import FilterItem from './FilterItem';

function Filter() {
  const genderInfo = ['All', 'Female', 'Male'];
  const statusInfo = ['All', 'Unknown', 'Alive', 'Dead'];
  const speciesInfo = ['All', 'Human', 'Alien'];

  return (
    <form className="filter__container">
      <label className="filter__item">
        Gender
        <FilterItem info={genderInfo} />
      </label>

      <label className="filter__item">
        Status
        <FilterItem info={statusInfo} />
      </label>

      <label className="filter__item">
        Species
        <FilterItem info={speciesInfo} />
      </label>
    </form>
  );
}

export default Filter;
