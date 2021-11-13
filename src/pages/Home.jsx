import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Search, Filter, Paginate, CharacterList,
} from '../components';
import { fetchCharacters } from '../store/actions/characterActions';

function Home() {
  const charactersState = useSelector((state) => state.characters);
  const { characters, currentPage, totalPage } = charactersState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters(currentPage));
  }, [dispatch, currentPage]);

  const paginationInfo = {
    totalPage,
    currentPage,
    clickFunc: 'character',
  };
  return (
    <div>
      <Search />
      <Filter />
      <CharacterList data={characters} />
      <Paginate info={paginationInfo} />
    </div>
  );
}

export default Home;
