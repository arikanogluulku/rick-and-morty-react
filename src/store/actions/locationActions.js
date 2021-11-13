import LocationService from '../../services/LocationsService';
import LocationTypes from '../actionTypes/locationTypes';

const locationService = new LocationService();

export const fetchLocations = (page) => async (dispatch) => {
  await locationService.getAll(page)
    .then((response) => dispatch({
      type: LocationTypes.FETCH_LOCATIONS_SUCCESS,
      payload: response.data.results,
    }))
    .catch((err) => dispatch({
      type: LocationTypes.FETCH_LOCATIONS_FAIL,
      payload: err.message,
    }));
};
export const setLocationResidenst = (character) => ({
  type: LocationTypes.SET_RESIDENTS,
  payload: character,
});
export const setLocationCurrentPage = (page) => ({
  type: LocationTypes.SET_CURRENT_PAGE,
  payload: page,
});
export const refreshLocationResidents = () => ({
  type: LocationTypes.REFRESH,
});
