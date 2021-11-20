import CharacterTypes from '../actionTypes/characterTypes';

const initialState = {
  characters: [],
  searchResult: [],
  totalPage: 42,
  currentPage: 1,
  error: false,
  error_message: null,
  loading: false,
};

export default function characterReducer(state = initialState, { payload, type }) {
  switch (type) {
    case CharacterTypes.FETCH_CHARACTERS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case CharacterTypes.FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: payload,
        loading: false,
      };
    case CharacterTypes.FETCH_CHARACTERS_FAIL:
      return {
        ...state,
        error: true,
        error_message: payload,
        loading: false,
      };
    case CharacterTypes.SEARCH_CHARACTER:
      return {
        ...state,
        searchResult: payload,
      };
    case CharacterTypes.SEARCH_CHARACTER_CLEAR:
      return {
        ...state,
        searchResult: [],
      };
    case CharacterTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };

    default:
      return state;
  }
}
