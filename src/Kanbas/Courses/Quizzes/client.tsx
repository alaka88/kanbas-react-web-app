import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;

const api = axios.create({
  withCredentials: true
})

export interface Quiz {
  _id: string;
  description: string;
  title: string;
  quizType: string;
  points: string
  assignmentGroup: string,
  shuffleAnswers: string,
  timeLimit: string,
  multipleAttempts: boolean,
  showCorrectAnswers: boolean,
  accessCode:string,
  oneQuestionAtATime:boolean,
  webcamRequired: boolean,
  lockQuestionsAfterAnswering: boolean,
  dueDate: Date, 
  availableDate: Date,
  untilDate: Date,
  for: string,
  requireRespondus: boolean,
  requireViewQuizResult: boolean,
  viewResponse: string,
  course: string,
  published: boolean,
  questions: string,
  questionList: [{
      id: string,
      name: string,
      type: string,
      answer: string,
      points: number
  }]
}

export const updateQuiz = async (quiz: any) => {
  const response = await api.put(`${COURSES_API}/quizzes/${quiz._id}`, quiz);
  return response.data;
};
export const deleteQuiz = async (quiz: any) => {
  const response = await api.delete(`${COURSES_API}/quizzes/${quiz._id}`);
  return response.data;
};
export const createQuiz = async (quiz: any) => {
  const response = await api.post(`${COURSES_API}/quizzes/${quiz._id}`, quiz);
  return response.data
};

export const findQuizzesForCourse = async (courseId: any) => {
  const response = await api.get(`${COURSES_API}/${courseId}/quizzes`);
  return response.data;
};