import { combineReducers } from 'redux';
import countReducer from './countReduser';


const reducers = combineReducers({
    count: countReducer
})

export default reducers