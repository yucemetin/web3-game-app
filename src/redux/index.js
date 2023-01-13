import { configureStore } from '@reduxjs/toolkit'
import languageReducer from "./language"
import burgerReducer from "./burgermodal"
import themeReducer from "./theme"
import gameReducer from "./tictactoeGame"

export default configureStore({
  reducer: {
    animation: languageReducer,
    burgermenu: burgerReducer,
    theme: themeReducer,
    game: gameReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})