import { createStore, applyMiddleware } from 'redux';
import reducers from '../redux2/reducers/index';
import thunk from 'redux-thunk'

export const store2 = createStore(reducers, {}, applyMiddleware(thunk))