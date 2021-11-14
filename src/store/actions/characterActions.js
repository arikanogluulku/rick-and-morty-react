import CharacterService from '../../services/CharacterService';
import CharacterTypes from '../actionTypes/characterTypes';

const characterService = new CharacterService();

export const fetchCharacters = (page) => async (dispatch) => {
  await characterService.getAll(page)
    .then((response) => dispatch({
      type: CharacterTypes.FETCH_CHARACTERS_SUCCESS,
      payload: response.data.results,
    }))
    .catch((err) => dispatch({
      type: CharacterTypes.FETCH_CHARACTERS_FAIL,
      payload: err.message,
    }));
};
export const setCharacterCurrentPage = (page) => ({
  type: CharacterTypes.SET_CURRENT_PAGE,
  payload: page,
});
