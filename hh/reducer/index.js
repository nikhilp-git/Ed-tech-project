import {combineReducers} from "@reduxjs/toolkit"
import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice"
import cartReducer from "../slices/cartSlice.js"
import viewCourseReducer from "../slices/viewCourseSlice.js"
import courseSlice from "../slices/courseSlice.js"

const rootReducer=combineReducers({
    auth:authReducer,
    profile:profileReducer,
    cart:cartReducer,
    viewCourse:viewCourseReducer,
    course:courseSlice
})

export default rootReducer