import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: localStorage?.getItem("theme") === 'true' ? true : false ?? true,
    confeti: false,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
            localStorage.setItem("theme", state.theme)
        },
        setConfeti: (state, action) => {
            state.confeti = action.payload
        },
    },
})

export const { setTheme, setConfeti } = themeSlice.actions

export default themeSlice.reducer