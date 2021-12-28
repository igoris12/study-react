import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './features/counterSlice';
import usersReducer from './features/users/usersSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer
    }
})