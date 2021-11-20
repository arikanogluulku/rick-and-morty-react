import CharacterService from '../../services/CharacterService';
import CharacterTypes from '../actionTypes/characterTypes';

const characterService = new CharacterService();

const fetchCharactersPending = () => ({
  type: CharacterTypes.FETCH_CHARACTERS_PENDING,
});
const fetchCharactersSuccess = (data) => ({
  type: CharacterTypes.FETCH_CHARACTERS_SUCCESS,
  payload: data,
});
const fetchCharactersFail = (message) => ({
  type: CharacterTypes.FETCH_CHARACTERS_FAIL,
  payload: message,
});

export const fetchCharacters = (page) => async (dispatch) => {
  dispatch(fetchCharactersPending());
  return (
    characterService.getAll(page)
      .then((response) => dispatch(fetchCharactersSuccess(response.data.results)))
      .catch((err) => dispatch(fetchCharactersFail(err.message)))
  );
};

export const searchCharacter = (name) => async (dispatch) => {
  await characterService.searchCharacter(name)
    .then((response) => dispatch({
      type: CharacterTypes.SEARCH_CHARACTER,
      payload: response.data.results,
    }));
};

export const searchCharacterResultClear = () => ({
  type: CharacterTypes.SEARCH_CHARACTER_CLEAR,
});
export const setCharacterCurrentPage = (page) => ({
  type: CharacterTypes.SET_CURRENT_PAGE,
  payload: page,
});
