import { configureStore } from '@reduxjs/toolkit'
import pageCountReducer from './components/ScrollEffect/pageCountRedux'

export const store = configureStore({
  reducer: {
    pageCount: pageCountReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
