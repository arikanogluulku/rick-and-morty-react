import { combineReducers } from 'redux';
import characterReducer from './reducers/characterReducer';
import locationReducer from './reducers/locationReducer';
import episodeReducer from './reducers/episodeReducer';

const rootReducer = combineReducers({
  characters: characterReducer,
  locations: locationReducer,
  episodes: episodeReducer,
});

export default rootReducer;
