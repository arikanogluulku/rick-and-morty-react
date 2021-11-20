/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Search(props) {
  const { searchInputChange, result, resultClear } = props;
  const ulRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.addEventListener('click', (event) => {
      event.stopPropagation();
      ulRef.current.style.display = 'flex';
    });
    document.addEventListener('click', () => {
      ulRef.current.style.display = 'none';
      resultClear();
    });
  }, []);

  return (
    <div className="search__container">
      <form>
        <input type="text" className="search__form__field" ref={inputRef} placeholder="search name..." onChange={(e) => searchInputChange(e.target.value)} />
        <ul className="search__result" ref={ulRef}>
          {
           result.map((char) => (
             <Link to={`/character/${char.id}`} style={{ textDecoration: 'none' }}>
               <div key={char.id} className="search__result-item">
                 <img src={char.image} alt={char.name} />
                 <p>{char.name}</p>
               </div>
             </Link>
           ))
          }
        </ul>
      </form>
    </div>
  );
}

export default Search;
