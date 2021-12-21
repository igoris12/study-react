import { combineReducers } from 'redux';
import countReducer from './countReduser';
import count2Reducer from './count2Reduser';
import loginReducer from './loginReducer';


const reducers = combineReducers({
    count: countReducer,
    count2: count2Reducer,
    login: loginReducer
})

export default reducers