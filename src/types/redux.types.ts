import { ThunkAction } from "redux-thunk"
import { store } from "@/redux"
import { Action } from "@reduxjs/toolkit"

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>