import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
}

export const burgerSlice = createSlice({
    name: 'burgerMenu',
    initialState,
    reducers: {
        setMenu: (state, action) => {
            state.isOpen = action.payload
        },
    },
})

export const { setMenu } = burgerSlice.actions

export default burgerSlice.reducer