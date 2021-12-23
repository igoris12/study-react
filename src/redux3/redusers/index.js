import { combineReducers } from 'redux';
import fetchReducer from './fetchDataReducer';

const reducers = combineReducers({
    data: fetchReducer
})

export default reducers;