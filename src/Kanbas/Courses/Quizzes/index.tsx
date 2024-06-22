import { useEffect, useState } from "react";
import { BsCaretDownFill, BsRocketTakeoff } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import QuizControl from "./QuizControl";
import QuizControlButton from "./QuizControlButton";
import * as client from "./client";
import { deleteQuiz, publishQuiz, setQuizzes, unpublishQuiz, updateQuiz } from "./reducer";

export default function Quizzes(){
  const { cid } = useParams();
  const dispatch = useDispatch();

  const [QuizName, setQuizName] = useState("");

  const removeQuiz = async (quizId: string) => {
    console.log("Removing quiz with ID:", quizId); // Log the quizId before deletion
    await client.deleteQuiz(quizId);
    dispatch(deleteQuiz(quizId));
  };
  const fetchQuizzes = async () => {
    const quizzes = await client.findQuizzesForCourse(cid as string);
    dispatch(setQuizzes(quizzes));
  };

const saveQuiz = async (quiz: any) => {
  const status = await client.updateQuiz(quiz);
  dispatch(updateQuiz(quiz));
};

  useEffect(() => {
    fetchQuizzes();
  }, []);
    
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);


  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }
  const handlePublish = (quizId: string, isPublished: boolean) => {
    if (isPublished) {
        dispatch(unpublishQuiz(quizId));
    } else {
        dispatch(publishQuiz(quizId));
    }
};
   
  return (
    <div id="wd-quizzes">
      <QuizControl />
      <br />
      <br />
      <br />
      <ul id="wd-quizzes-title" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" style={{ borderLeft: '4px solid green' }}>
          <div className="wd-title p-3 ps-2 bg-secondary">
            <button id="wd-quiz-title" className="btn btn-transparent">
              <BsCaretDownFill className="fs-16 me-2"/>
              <span className="fw-bold">Assignment Quizzes</span>
            </button>
          </div>
          <ul id="wd-quiz-list" className="list-group rounded-0">
          {quizzes.filter((quiz: any) => quiz.course === cid).map((quiz: any,index:any) => (
              <li key={quiz._id} className="wd-quiz-list-item list-group-item p-3 ps-1 d-flex flex-column">
                <div className="d-flex align-items-center mb-2">
                  <BsRocketTakeoff className="me-3 fs-3" style={{ color: 'green' }} />
                  
                  <Link className="wd-quiz-link flex-grow-1"
                  key={`quiz-link-${quiz._id}`} 
                        to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}
                        style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>
                    <h5><b>Q{index + 1} - {quiz.title}</b></h5>
                  </Link>
                  <span 
                                        className="me-3 fs-3 "
                                        style={{ color: 'green', cursor: 'pointer' }}
                                        onClick={() => handlePublish(quiz._id, quiz.published)}
                                    >
                                        {quiz.published ? '✅' : '🚫'}
                                    </span>
                  <QuizControlButton quizId={quiz._id} deleteQuiz={(quizId) => { removeQuiz(quizId); }} quiz={quiz} />
                </div>
                <span className="ms-5 small">
                  <span className="text-danger">Available</span>
                  | <b>Due</b> {formatDate(quiz.due)} at 11:59pm | {quiz.points} pts
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}