import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./reducers/CounterReducer";
import themeReducer from './reducers/ToggleTheme'
export const store = configureStore({ reducer: combineReducers({ counter: counterReducer, theme: themeReducer }) })
