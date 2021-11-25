import React from 'react';
import DetailModal from './DetailModal';
import './style.scss';

function Locations({ data }) {
  return (
    <div>
      <div className="locations__container">
        {
          data.map((loc) => (
            <div key={loc.id} className="locations__cart">
              <h1 className="locations__cart__name">
                {loc.name}
              </h1>
              <p className="locations__cart__info">
                <span className="locations__cart__title">Type: </span>
                {loc.type}
              </p>
              <p className="locations__cart__info">
                <span className="locations__cart__title">Dimension: </span>
                {loc.dimension}
              </p>
              <div className="locations__detail">
                <DetailModal info={loc} />
              </div>
            </div>
          ))
      }
      </div>
    </div>
  );
}

export default Locations;
