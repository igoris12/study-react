import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: state => {

            state.count += 1
        },
        decrement: state => {
            state.count -= 1
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
    }
})


export const { increment, decrement, incrementByAmount, async } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 1000);
}



export default counterSlice.reducer
