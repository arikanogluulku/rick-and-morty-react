import EpisodeService from '../../services/EpisodeService';
import EpisodeTypes from '../actionTypes/episodeTypes';

const episodeService = new EpisodeService();
export const fetchEpisodes = (page) => async (dispatch) => {
  await episodeService.getAll(page)
    .then((response) => dispatch({
      type: EpisodeTypes.FETCH_EPISODE_SUCCESS,
      payload: response.data.results,
    }))
    .catch((err) => dispatch({
      type: EpisodeTypes.FETCH_EPISODE_FAIL,
      payload: err.message,
    }));
};

export const setEpisodeCurrentPage = (page) => ({
  type: EpisodeTypes.SET_CURRENT_PAGE,
  payload: page,
});
