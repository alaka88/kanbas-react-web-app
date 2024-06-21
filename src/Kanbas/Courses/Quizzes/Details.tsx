import { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { KanbasState } from "../../store";
import './Details.css';
import * as client from "./client";
import { setQuizzes } from "./reducer";

export default function QuizDetails() {
    const { courseId } = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const { cid } = useParams();
    const [showQuiz, setShowQuiz] = useState(true);
    const [isPublished, setIsPublished] = useState(true);
    const togglePublishStatus = () => {
        setIsPublished(!isPublished);
        setShowQuiz(!showQuiz);
    };
    useEffect(() => {
        client.findQuizzesForCourse(courseId)
            .then((quizzes) =>
                dispatch(setQuizzes(quizzes))
            );
    }, [courseId]);
    const publishIcon = isPublished ? (
        <FaCheckCircle className="text-success" />
      ) : (
        <FaTimesCircle className="text-danger" />
      );
      const publishText = isPublished ? "Published" : "Unpublished";
    
    const quiz = useSelector((state: KanbasState) =>
        state.quizzesReducer.quiz);
    return (
        <div className="container" style={{ marginLeft: '20px' }}>
            <div id="wd-bt" className="float end">
            <button className="btn btn-lightgrey me-3 wd-fg-color-green button-padding"
                onClick={togglePublishStatus}>
            {publishIcon}
          <span className={isPublished ? "text-success" : "text-danger"}>
            {publishText}
            </span>
        </button>
                <Link to={`/Kanbas/Courses/${cid}/Quizzes/newquiz/preview`}>
                    <button className="btn btn-lightgrey me-3">Preview</button>
                </Link>
                <span className="text-muted"></span>
                <Link to={`/Kanbas/Courses/${cid}/Quizzes/editor`}>
                    <button type="button" className="btn btn-lightgrey">
                        <FaPencil /> Edit
                    </button>
                </Link>
            </div>
            <hr />
            <div>
                <h2><b>Q{quiz.title}</b></h2>

                <div>
                    {[
                        { label: 'Quiz Type', value: quiz.quizType },
                        { label: 'Points', value: quiz.points },
                        { label: 'Assignment Group', value: quiz.assignmentGroup },
                        { label: 'Shuffle Answers', value: quiz.shuffleAnswers },
                        { label: 'Time Limit', value: quiz.timeLimit },
                        { label: 'Multiple Attempts', value: quiz.multipleAttempts ? 'No' : 'Yes' },
                        { label: 'View Responses', value: quiz.viewResponse },
                        { label: 'Show Correct Answers', value: quiz.showCorrectAnswers },
                        { label: 'Access Code', value: quiz.accessCode },
                        { label: 'One Question at a Time', value: quiz.oneQuestionAtATime },
                        { label: 'Require Respondus LockDown Browser', value: quiz.requireRespondus },
                        { label: 'Required to View Quiz Results', value: quiz.requireViewQuizResult },
                        { label: 'Webcam Required', value: quiz.webcamRequired },
                        { label: 'Lock Questions After Answering', value: quiz.lockQuestionsAfterAnswering }
                    ].map(({ label, value }, index) => (
                        <div className="row justify-content-start mb-2" key={index}>
                            <div className="col-md-4 d-flex justify-content-end bold text-truncate">
                                <span><b>{label}</b></span>
                            </div>
                            <div className="col-md-4">
                                <span>{value}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <p></p>

                <div className="row justify-content-start">
                    <div className="col-md-3 bold">
                        <span><b>Due</b></span>
                    </div>
                    <div className="col-md-3 bold">
                        <span><b>For</b></span>
                    </div>
                    <div className="col-md-3 bold">
                        <span><b>Available from</b></span>
                    </div>
                    <div className="col-md-3 bold">
                        <span><b>Until</b></span>
                    </div>
                </div>
                <hr/>

                <div className="row justify-content-start">
                    <div className="col-md-3">
                        <span>{quiz.dueDate}</span>
                    </div>
                    <div className="col-md-3">
                        <span>{quiz.for}</span>
                    </div>
                    <div className="col-md-3">
                        <span>{quiz.availableDate}</span>
                    </div>
                    <div className="col-md-3">
                        <span>{quiz.untilDate}</span>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
}