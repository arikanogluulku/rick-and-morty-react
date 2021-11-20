/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Search, Paginate, CharacterList, MenuTitle,
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
      <MenuTitle info="characters" />
      <Search
        result={searchResult}
        resultClear={searchResultClear}
        searchInputChange={searchInputChange}
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
