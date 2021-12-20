import { combineReducers } from 'redux';
import countReducer from './countReduser';
import count2Reducer from './count2Reduser';


const reducers = combineReducers({
    count: countReducer,
    count2: count2Reducer
})

export default reducers