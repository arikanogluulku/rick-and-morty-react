import { combineReducers } from 'redux';
import characterReducer from './reducers/characterReducer';
import locationReducer from './reducers/locationReducers';

const rootReducer = combineReducers({
  characters: characterReducer,
  locations: locationReducer,
});

export default rootReducer;
