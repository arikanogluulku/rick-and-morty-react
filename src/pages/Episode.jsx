import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MenuTitle, EpisodeList, Paginate } from '../components';
import { fetchEpisodes } from '../store/actions/episodeActions';

function Episode() {
  const episodesState = useSelector((state) => state.episodes);
  const { episodes, currentPage, totalPage } = episodesState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEpisodes(currentPage));
  }, [dispatch, currentPage]);

  const paginationInfo = {
    totalPage,
    currentPage,
    clickFunc: 'episode',
  };

  return (
    <div>
      <MenuTitle info="Episodes" />
      <EpisodeList data={episodes} />
      <Paginate info={paginationInfo} />
    </div>
  );
}

export default Episode;
