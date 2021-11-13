/* eslint-disable import/prefer-default-export */
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './root';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
