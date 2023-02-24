import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: '',
    email: '',
    token: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userName = action.payload.userName;
            state.email = action.payload.email;
            state.token = action.payload.token;
        }
    }
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer