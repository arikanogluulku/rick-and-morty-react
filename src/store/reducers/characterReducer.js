import CharacterTypes from '../actionTypes/characterTypes';

const initialState = {
  characters: [],
  totalPage: 42,
  currentPage: 1,
  error: false,
  error_message: null,
  loading: true,
};

export default function characterReducer(state = initialState, { payload, type }) {
  switch (type) {
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
    case CharacterTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    default:
      return state;
  }
}
