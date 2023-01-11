import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: localStorage?.getItem("theme") === 'true' ? true : false ?? true,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
            localStorage.setItem("theme",state.theme)
        },
    },
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer