import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import counterReducer from './features/counterSlice';


export default configureStore({
    reducer: {
        counter: counterReducer
    }
})