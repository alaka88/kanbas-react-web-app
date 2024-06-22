import { createSlice } from "@reduxjs/toolkit";

// Function to format date in the desired format
const formatDate = (date: Date): string => {
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).replace(',', '');
};

// Function to generate dynamic dates
const generateDates = () => {
  const now = new Date();
  const dueDate = new Date(now.getTime() + 2 * 60 * 60 * 1000); // 2 hours from now
  const availableDate = new Date(now.getTime() + 40 * 60 * 1000); // 40 minutes from now
  const untilDate = new Date(now.getTime() + 2 * 60 * 60 * 1000); // 2 hours from now

  return {
    dueDate: formatDate(dueDate),
    availableDate: formatDate(availableDate),
    untilDate: formatDate(untilDate)
  };
};

// Generate initial dates
const initialDates = generateDates();

const initialState = {
  quizzes: [] as { id: string; title: string; published: boolean; }[],
  quiz: {
    id: 1,
    title: "new quiz",
    quizType: 'Graded Quiz',
    published: false,
    points: 0,
    assignmentGroup: 'QUIZZES',
    shuffleAnswers: "Yes",
    timeLimit: "20 Minutes",
    multipleAttempts: "No",
    showCorrectAnswers: "Immediately",
    accessCode: '',
    oneQuestionAtATime: "Yes",
    webcamRequired: "No",
    lockQuestionsAfterAnswering: "No",
    dueDate: initialDates.dueDate,
    availableDate: initialDates.availableDate,
    untilDate: initialDates.untilDate,
    for: "Everyone",
    requireRespondus: "No",
    requireViewQuizResult: "No",
    viewResponse: "Always",
    questions: 0,
    questionList: [
      {
        _id: "Q101",
        name: "This is the first question?",
        type: "truefalse",
        answer: "true",
        point: 1
      },
      {
        _id: "Q102",
        name: "This is the last question?",
        type: "Fill in the Blank",
        answer: "false",
        point: 100
      },
      {
        _id: "Q103",
        name: "This is the not question?",
        type: "MCQ",
        correctAnswer: "correct Answer",
        options: [
          { op: "option 1" },
          { op: "option 2" },
          { op: "option 3" }
        ],
        point: 4
      }
    ]
  },
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },
    addQuiz: (state, action) => {
      state.quizzes = [action.payload, ...state.quizzes];
    },
    deleteQuiz: (state, action) => {
      state.quizzes = state.quizzes.filter((quiz) =>
        quiz.id !== action.payload);
    },
    updateQuiz: (state, action) => {
      state.quizzes = state.quizzes.map((quiz) => {
        if (quiz.id === action.payload.id) {
          return action.payload;
        } else {
          return quiz;
        }
      });
    },
    setQuiz: (state, action) => {
      state.quiz = action.payload;
    },
    selectQuiz: (state, action) => {
      state.quiz = action.payload;
    },
    publishQuiz(state, action) {
        const quizId = action.payload;
        const quiz = state.quizzes.find((q: any) => q._id === quizId);
        if (quiz) {
            quiz.published = true;
        }
    },
    unpublishQuiz(state, action) {
        const quizId = action.payload;
        const quiz = state.quizzes.find((q: any) => q._id === quizId);
        if (quiz) {
            quiz.published = false;
        }
    },
    resetQuizDates: (state) => {
      const newDates = generateDates();
      state.quiz.dueDate = newDates.dueDate;
      state.quiz.availableDate = newDates.availableDate;
      state.quiz.untilDate = newDates.untilDate;
    }
  },
});

export const {
  setQuizzes,
  addQuiz,
  deleteQuiz,
  updateQuiz,
  setQuiz,
  selectQuiz,
  publishQuiz,
  unpublishQuiz,
  resetQuizDates
} = quizzesSlice.actions;

export default quizzesSlice.reducer;