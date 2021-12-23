import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redusers/index';

export const store3 = createStore(reducers, {}, applyMiddleware(thunk))