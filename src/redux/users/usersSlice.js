import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice ({
    name: 'users',
    initialState: {
        users: [],
        isLoading: true,
        error: undefined,
    },
    extraReducers: {},
})

export default userSlice.reducer;