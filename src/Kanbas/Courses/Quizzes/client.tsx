import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const QUIZ_API = `${REMOTE_SERVER}/api/quizzes`;

// fetch all quizzes for a course
export const findQuizzesForCourse = async (cid: any) => {
    const response = await axios
        .get(`${COURSES_API}/${cid}/quizzes`);
    return response.data;
};

// fetch details of a quiz
export const findQuizDetails = async (cid: string, qid: string) => {
    const response = await axios
        .get(`${COURSES_API}/${cid}/quizzes/${qid}`);
    return response.data;
};

// Creating a quiz for a Course
export const createQuiz = async (cid: string, quiz: any) => {
    const response = await axios.post(`${COURSES_API}/${cid}/quizzes`, quiz);
    return response.data;
};


export const updateQuiz = async (quiz:any) => {
  const response = await fetch(`/api/quizzes/${quiz._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(quiz)
  });
  if (!response.ok) {
    throw new Error('Failed to update quiz');
  }
  return await response.json();
};

// Deleting a quiz
export const deleteQuiz = async (qid: string) => {
    const response = await axios.delete(`${QUIZ_API}/${qid}`);
    return response.data;
};
let questionsData: Question[] = [
  { id: '1', title: 'Question 1', type: 'multiple_choice', points: 10 },
  { id: '2', title: 'Question 2', type: 'true_false', points: 5 },
];

interface Question {
  id: string;
  title: string;
  type: 'multiple_choice' | 'true_false' | 'fill_in_the_blank';
  points: number;
  options?: string[];
}

export const updateQuestion = async (question: Question): Promise<void> => {
  // Simulate update question on server
  const index = questionsData.findIndex((q) => q.id === question.id);
  if (index !== -1) {
    questionsData[index] = question;
  } else {
    throw new Error('Question not found');
  }
};

export const createQuestion = async (question: Question): Promise<Question> => {
  // Simulate create question on server
  const newQuestion = { ...question, id: String(questionsData.length + 1) };
  questionsData.push(newQuestion);
  return newQuestion;
};