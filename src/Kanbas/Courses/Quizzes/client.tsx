import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;

export const findQuizzesForCourse = async (courseId: string) => {
    const response = await axios
    .get(`${COURSES_API}/${courseId}/quizzes`);
    return response.data;
    };
export const deleteQuiz = async (quizId: string) => {
    const response = await axios
    .delete(`${QUIZZES_API}/${quizId}`);
    return response.data;
    };
