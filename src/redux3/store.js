import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchingReducer from './redusers/fetchDataReducer';

export const store3 = createStore(fetchingReducer, {}, applyMiddleware(thunk))