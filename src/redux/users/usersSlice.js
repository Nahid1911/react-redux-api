import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userAPI = 'https://randomuser.me/api/?results=5';

const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await fetch(userAPI);
        const data = await response.json();
        return data.results;
    } catch (error) {
        return error;
    }
})

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        isLoading: true,
        error: undefined,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    },
})

export { fetchUsers };
export default userSlice.reducer;
