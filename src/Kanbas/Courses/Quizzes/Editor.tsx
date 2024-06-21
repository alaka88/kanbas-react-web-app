import { ChangeEvent, useEffect, useState } from 'react';
import { FaCheckCircle, FaEllipsisV, FaTimesCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { KanbasState } from '../../store';
import WYSIWYGEditor from './WYSIWYG';
import * as client from './client';
import { setQuizzes } from './reducer';

interface QuizData {
  title: string;
  description: string;
  quizType: string;
  points: number;
  assignmentGroup: string;
  shuffleAnswers: boolean;
  timeLimit: number;
  multipleAttempts: boolean;
  showCorrectAnswers: string;
  accessCode: string;
  oneQuestionAtATime: boolean;
  webcamRequired: boolean;
  lockQuestionsAfterAnswering: boolean;
  due: string;
  available: string;
  until: string;
  published?: boolean;
  id?: string;
}

const QuizEditor = () => {
  const { cid } = useParams<{ cid: string }>();
  const { pathname } = useLocation();
  const qid = pathname.split('/').pop();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const quizzes = useSelector((state: KanbasState) => state.quizzesReducer.quizzes);
  const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz) as QuizData;

  const [isPublished, setIsPublished] = useState(true);
  const [quizData, setQuizData] = useState<QuizData>({
    title: '',
    description: '',
    quizType: 'Graded Quiz',
    points: 0,
    assignmentGroup: 'Quizzes',
    shuffleAnswers: true,
    timeLimit: 20,
    multipleAttempts: false,
    showCorrectAnswers: '',
    accessCode: '',
    oneQuestionAtATime: true,
    webcamRequired: false,
    lockQuestionsAfterAnswering: false,
    due: '',
    available: '',
    until: ''
    
  });
  const [activeTab, setActiveTab] = useState<'details' | 'questions'>('details'); // State for active tab
  useEffect(() => {
    if (quiz) {
      setQuizData(quiz);
    }
  }, [quiz]);
  const handleTabChange = (tab: 'details' | 'questions') => {
    setActiveTab(tab);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setQuizData({
      ...quizData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleTogglePublish = () => {
    const updatedQuiz = { ...quizData, published: !quizData.published };
    client.updateQuiz(updatedQuiz)
      .then(() => {
        const updatedQuizzes = quizzes.map((q) => (q._id === quizData.id ? updatedQuiz : q));
        dispatch(setQuizzes(updatedQuizzes));
        setIsPublished(updatedQuiz.published!);
      })
      .catch((err) => {
        console.error('Failed to update quiz', err);
      });
  };

  const handleSave = async () => {
    if (!quizData.id) {
      console.error('Quiz ID is missing.');
      return;
    }
  
    try {
      await client.updateQuiz(quizData);
      navigate(`/Kanbas/Courses/${cid}/Quizzes/details`);
    } catch (err) {
      console.error('Failed to save quiz', err);
    }
  };
  
  const handleSaveAndPublish = async () => {
    if (!quizData.id) {
      console.error('Quiz ID is missing.');
      return;
    }
  
    const updatedQuiz = { ...quizData, published: true };
  
    try {
      await client.updateQuiz(updatedQuiz);
      navigate(`/Kanbas/Courses/${cid}/Quizzes`);
    } catch (err) {
      console.error('Failed to save and publish quiz', err);
    }
  };

  return (
    <div className="container">
      <div className="float-end">
        <span>
          Points {quizData.points} &nbsp;&nbsp;&nbsp;
        </span>
        <span>
          {isPublished ? (
            <FaCheckCircle className="text-success me-1" />
          ) : (
            <FaTimesCircle className="text-secondary me-1" />
          )}
          {isPublished ? 'Published' : 'Unpublished'}&nbsp;&nbsp;&nbsp;
          <button className="btn btn-outline-secondary" onClick={handleTogglePublish}>
            <FaEllipsisV />
          </button>
        </span>
      </div>
      <br /><br /><hr />
      <nav className="nav nav-tabs" style={{ marginTop: '10px' }}>
      <button
          className={`nav-link ${activeTab === 'details' ? 'active' : ''}`}
          onClick={() => handleTabChange('details')}
        >
          Details
        </button>
        <button
          className={`nav-link ${activeTab === 'questions' ? 'active' : ''}`}
          onClick={() => handleTabChange('questions')}
        >
          Questions
        </button>
      </nav>
      {activeTab === 'details' ? (
        <div className="details-content">
      <br />
      <div className="mb-3">
        <input type="text" className="form-control" name="title" value={quizData.title} placeholder="New Title" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Quiz Instructions</label>
        <WYSIWYGEditor value={quizData.description} onChange={(content) => setQuizData({ ...quizData, description: content })} />
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="points" className="col-form-label float-end">Points</label>
        </div>
        <div className="col">
          <input type="number" className="form-control" name="points" value={quizData.points} onChange={handleChange} />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="quizType" className="col-form-label float-end">Quiz Type</label>
        </div>
        <div className="col">
          <select className="form-select" name="quizType" value={quizData.quizType} onChange={handleChange}>
            <option value="Graded Quiz">Graded Quiz</option>
            <option value="Practice Quiz">Practice Quiz</option>
            <option value="Graded Survey">Graded Survey</option>
            <option value="Ungraded Survey">Ungraded Survey</option>
          </select>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="assignmentGroup" className="col-form-label float-end">Assignment Group</label>
        </div>
        <div className="col">
          <select className="form-select" name="assignmentGroup" value={quizData.assignmentGroup} onChange={handleChange}>
            <option value="Quizzes">Quizzes</option>
            <option value="Exams">Exams</option>
            <option value="Assignments">Assignments</option>
            <option value="Project">Project</option>
          </select>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="shuffleAnswers" className="col-form-label float-end">Shuffle Answers</label>
        </div>
        <div className="col">
          <select className="form-select" name="shuffleAnswers" value={quizData.shuffleAnswers ? 'Yes' : 'No'} onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="timeLimit" className="col-form-label float-end">Time Limit (Minutes)</label>
        </div>
        <div className="col">
          <input type="number" className="form-control" name="timeLimit" value={quizData.timeLimit} onChange={handleChange} />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="multipleAttempts" className="col-form-label float-end">Multiple Attempts</label>
        </div>
        <div className="col">
          <select className="form-select" name="multipleAttempts" value={quizData.multipleAttempts ? 'Yes' : 'No'} onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="showCorrectAnswers" className="col-form-label float-end">Show Correct Answers</label>
        </div>
        <div className="col">
          <input type="text" className="form-control" name="showCorrectAnswers" value={quizData.showCorrectAnswers} onChange={handleChange} />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="accessCode" className="col-form-label float-end">Access Code</label>
        </div>
        <div className="col">
          <input type="text" className="form-control" name="accessCode" value={quizData.accessCode} onChange={handleChange} />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="oneQuestionAtATime" className="col-form-label float-end">One Question at a Time</label>
        </div>
        <div className="col">
          <select className="form-select" name="oneQuestionAtATime" value={quizData.oneQuestionAtATime ? 'Yes' : 'No'} onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="webcamRequired" className="col-form-label float-end">Webcam Required</label>
        </div>
        <div className="col">
          <select className="form-select" name="webcamRequired" value={quizData.webcamRequired ? 'Yes' : 'No'} onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="lockQuestionsAfterAnswering" className="col-form-label float-end">Lock Questions After Answering</label>
        </div>
        <div className="col">
          <select className="form-select" name="lockQuestionsAfterAnswering" value={quizData.lockQuestionsAfterAnswering ? 'Yes' : 'No'} onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="due" className="col-form-label float-end">Due Date</label>
        </div>
        <div className="col">
          <input type="date" className="form-control" name="due" value={quizData.due} onChange={handleChange} />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="available" className="col-form-label float-end">Available From</label>
        </div>
        <div className="col">
          <input type="date" className="form-control" name="available" value={quizData.available} onChange={handleChange} />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="until" className="col-form-label float-end">Available Until</label>
        </div>
        <div className="col">
          <input type="date" className="form-control" name="until" value={quizData.until} onChange={handleChange} />
        </div>
      </div>
      
        </div>
      ) : (
        <div className="questions-content">
          {/* Questions content */}
        </div>
      )}
      <div className="mb-2">
        <button className="btn btn-danger float-end ms-2" onClick={handleSave}>Save</button>
        <button className="btn btn-success float-end ms-2" onClick={handleSaveAndPublish}>Save and Publish</button>
        <Link to={`/Kanbas/Courses/${cid}/Quizzes`}>
          <button className="btn btn-secondary float-end">Cancel</button>
        </Link>
      </div>
    </div>
  );
};

export default QuizEditor;
