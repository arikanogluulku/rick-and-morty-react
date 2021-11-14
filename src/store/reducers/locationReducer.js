import LocationTypes from '../actionTypes/locationTypes';

const initialState = {
  locations: [],
  residents: [],
  totalPage: 7,
  currentPage: 1,
  error: false,
  error_message: null,
  loading: true,
};
export default function locationReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LocationTypes.FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        locations: payload,
        loading: false,

      };
    case LocationTypes.FETCH_LOCATIONS_FAIL:
      return {
        ...state,
        error: true,
        error_message: payload,
        loading: false,
      };
    case LocationTypes.SET_RESIDENTS:
      return {
        ...state,
        residents: [...state.residents, payload],
        loading: false,
      };
    case LocationTypes.REFRESH:
      return {
        ...state,
        residents: [],
        loading: true,
      };
    case LocationTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    default:
      return state;
  }
}
