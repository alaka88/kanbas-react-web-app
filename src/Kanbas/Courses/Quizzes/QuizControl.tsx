import { FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addQuiz } from "./reducer";

export default function QuizControls() {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddQuiz = () => {
        const defaultQuiz = {
            title: "New Quiz",
            course: cid,
            quizType: "Multiple Choice",
            points: 0,
            assignmentGroup: "",
            shuffleAnswers: false,
            timeLimit: 0,
            multipleAttempts: false,
            viewResponse: false,
            showCorrectAnswers: false,
            oneQuestionAtATime: false,
            requireRespondus: false,
            requireViewQuizResult: false,
            webcamRequired: false,
            lockQuestionsAfterAnswering: false,
            dueDate: "",
            availableDate: "",
            untilDate: "",
            published: false,
        };

        dispatch(addQuiz(defaultQuiz));
        navigate(`/Kanbas/Courses/${cid}/Quizzes/newquiz`);
    };

    return (
        <div id="wd-quizzes" className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <div className="position-relative">
                    <input
                        id="wd-search-quizz"
                        className="form-control me-1"
                        placeholder="Search for Quiz"
                        style={{ width: '300px', height: '45px', paddingLeft: '36px', fontSize: '16px', background: '#fff' }}
                    />
                    <FaSearch className="position-absolute" style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#ccc', fontSize: '16px' }} />
                </div>
            </div>

            <div className="d-flex">
                <button
                    id="wd-add-quiz"
                    className="btn btn-lg btn-danger d-flex align-items-center me-2"
                    style={{ height: '45px', padding: '5px 10px' }}
                    onClick={addQuiz}
                >
                    <Link to={`/Kanbas/Courses/${cid}/Quizzes/newquiz`} className="btn btn-lg btn-danger d-flex align-items-center" style={{ height: '45px' }}>
                    <span>Quiz</span>
                    </Link>
                </button>
                <button
                    id="wd-add-quiz-group"
                    className="btn btn-lg btn-secondary me-1 d-flex align-items-center"
                    style={{ height: '45px' }}
                >
                    <IoEllipsisVertical className="position-relative" style={{ bottom: "1px" }} />
                </button>
            </div>
        </div>
    );
}
