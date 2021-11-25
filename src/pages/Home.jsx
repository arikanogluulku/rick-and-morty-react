import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Search, Paginate, CharacterList, MenuTittle,
} from '../components';
import {
  fetchCharacters, searchCharacter, searchCharacterResultClear, setCharacterCurrentPage,
} from '../store/actions/characterActions';

function Home() {
  const charactersState = useSelector((state) => state.characters);
  const {
    characters, currentPage, totalPage, searchResult,
  } = charactersState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters(currentPage));
  }, [dispatch, currentPage]);

  const searchInputChange = (text) => {
    text.length > 3 ? dispatch(searchCharacter(text)) : null;
  };
  const searchResultClear = () => {
    dispatch(searchCharacterResultClear());
  };
  const handlePageChange = (data) => {
    dispatch(setCharacterCurrentPage(data.selected + 1));
  };
  return (
    <div>
      <MenuTittle info="characters" />
      <Search
        resultClear={searchResultClear}
        searchInputChange={searchInputChange}
        children={
            searchResult.map((char) => (
              <Link to={`/character/${char.id}`} style={{ textDecoration: 'none' }} key={char.id}>
                <div className="search__result-item">
                  <img src={char.image} alt={char.name} />
                  <p>{char.name}</p>
                </div>
              </Link>
            ))
          }
      />
      <CharacterList data={characters} />
      <Paginate
        totalPage={totalPage}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default Home;
