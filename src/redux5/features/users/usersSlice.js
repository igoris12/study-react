import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }


            const data = await response.json();
            return data
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)


export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        status: null,
        error: null
    },

    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.list = action.payload;
        },
        [fetchUsers.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
})


export default usersSlice.reducer