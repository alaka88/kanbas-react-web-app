import { configureStore } from "@reduxjs/toolkit";
import assignmentsReducer from "../Courses/Assignments/reducer";
import modulesReducer from "../Courses/Modules/reducer";
import quizzesReducer from "../Courses/Quizzes/reducer";

const store = configureStore({
    reducer: {
        modulesReducer,
        assignmentsReducer,
        quizzesReducer
    }
});
export default store;