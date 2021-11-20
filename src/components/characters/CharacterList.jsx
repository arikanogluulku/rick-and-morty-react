import React from 'react';
import { Link } from 'react-router-dom';

function CharacterList({ data }) {
  return (
    <div className="characters__container">
      {
          data.map((char) => (
            <Link to={`/character/${char.id}`} style={{ textDecoration: 'none' }}>
              <div className="characters__card" key={char.id}>
                <img className="characters__card-image" src={char.image} alt={char.name} />
                <p className="characters__card-title">{char.name}</p>
              </div>
            </Link>
          ))
        }
    </div>
  );
}
export default CharacterList;
