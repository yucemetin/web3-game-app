import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentLanguage: 'us',
}

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setCurrentLanguage: (state, action) => {
            state.currentLanguage = action.payload
            localStorage.setItem("lang",state.currentLanguage)
        },
    },
})

export const { setCurrentLanguage } = languageSlice.actions

export default languageSlice.reducer