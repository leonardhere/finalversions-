import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import formSlice from "./reducers/formSlice";
import stepSlice from "./reducers/stepSlice";

const rootReducer=combineReducers({
    "user":userSlice,
    "form":formSlice,
    "step": stepSlice
})

export const setupStore=()=>{
    return configureStore({
        reducer:rootReducer
    })
}

export type RootState=ReturnType<typeof  rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]