import { configureStore } from "@reduxjs/toolkit";
import assignmentsReducer from "../Courses/Assignments/reducer";
import modulesReducer from "../Courses/Modules/reducer";

const store = configureStore({
    reducer: {
        modulesReducer,
        assignmentsReducer
    }
});
export default store;