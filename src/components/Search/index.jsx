import React, { useEffect, useRef } from 'react';
import './style.scss';

function Search({ searchInputChange, resultClear, children }) {
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
          {children}
        </ul>
      </form>
    </div>
  );
}

export default Search;
