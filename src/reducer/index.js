<<<<<<< HEAD
import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice"                 // importing all reducer which is made into slices;
import profileReducer from "../slices/profileSlice";
import cartReducer from "../slices/cartSlice"
import courseReducer from "../slices/courseSlice"
import viewCourseReducer from "../slices/viewCourseSlice"  

const rootReducer  = combineReducers({                  // combining all reducer;
    auth: authReducer,
    profile:profileReducer,
    cart:cartReducer,
    course:courseReducer,
    viewCourse:viewCourseReducer,
})

=======
import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice"                 // importing all reducer which is made into slices;
import profileReducer from "../slices/profileSlice";
import cartReducer from "../slices/cartSlice"
import courseReducer from "../slices/courseSlice"
import viewCourseReducer from "../slices/viewCourseSlice"  

const rootReducer  = combineReducers({                  // combining all reducer;
    auth: authReducer,
    profile:profileReducer,
    cart:cartReducer,
    course:courseReducer,
    viewCourse:viewCourseReducer,
})

>>>>>>> c3f353a8bb1b7cdc320641c7cb7a57411cadd631
export default rootReducer