import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MenuTittle, EpisodeList, Paginate } from '../components';
import { fetchEpisodes, setEpisodeCurrentPage } from '../store/actions/episodeActions';

function Episode() {
  const episodesState = useSelector((state) => state.episodes);
  const { episodes, currentPage, totalPage } = episodesState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEpisodes(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (data) => {
    dispatch(setEpisodeCurrentPage(data.selected + 1));
  };

  return (
    <div>
      <MenuTittle info="Episodes" />
      <EpisodeList data={episodes} />
      <Paginate
        totalPage={totalPage}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default Episode;
