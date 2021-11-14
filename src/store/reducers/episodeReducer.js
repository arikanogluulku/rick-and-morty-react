import EpisodeTypes from '../actionTypes/episodeTypes';

const initialState = {
  episodes: [],
  totalPage: 3,
  currentPage: 1,
  error: false,
  error_message: null,
  loading: true,
};
export default function episodeReducer(state = initialState, { type, payload }) {
  switch (type) {
    case EpisodeTypes.FETCH_EPISODE_SUCCESS:
      return {
        ...state,
        episodes: payload,
        loading: false,
      };
    case EpisodeTypes.FETCH_EPISODE_FAIL:
      return {
        ...state,
        error: true,
        error_message: payload,
        loading: false,
      };
    case EpisodeTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    default:
      return state;
  }
}
