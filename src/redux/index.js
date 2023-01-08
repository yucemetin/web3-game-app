import { configureStore } from '@reduxjs/toolkit'
import languageReducer from "./language"

export default configureStore({
  reducer: {
    animation: languageReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})