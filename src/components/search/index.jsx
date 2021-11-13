import React from 'react';

function Search() {
  return (
    <div className="search__container">
      <form>
        <input type="email" className="search__form__field" placeholder="Search Character" />
        <button
          type="button"
          className="button button__search button__inside"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
