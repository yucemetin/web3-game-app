import { configureStore } from '@reduxjs/toolkit'
import languageReducer from "./language"
import burgerReducer from "./burgermodal"
import themeReducer from "./theme"

export default configureStore({
  reducer: {
    animation: languageReducer,
    burgermenu: burgerReducer,
    theme: themeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})