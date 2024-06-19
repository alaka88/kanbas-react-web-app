import { IoEllipsisVertical } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { publishQuiz, unpublishQuiz } from "./reducer"; // import actions

export default function QuizControlButton({ quizId, deleteQuiz, quiz }: { quizId: string; deleteQuiz: (quizId: string) => void; quiz: any }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePublish = () => {
        if (quiz.published) {
            dispatch(unpublishQuiz(quizId));
        } else {
            dispatch(publishQuiz(quizId));
        }
    };

    return(
        <div className="float-end">
            <button className="btn btn-transparent" style={{ padding: '1px' }} type="button" data-bs-toggle="dropdown">
                <IoEllipsisVertical className="fs-4" />
            </button>
            <ul className="dropdown-menu">
                <li>
                    <Link id="wd-edit-items-btn" className="dropdown-item" to={`/Kanbas/Courses/${quiz.course}/Quizzes/${quizId}/edit`}>
                      Edit
                    </Link>
                </li>
                <li>
                    <button id="wd-delete-item-button" className="dropdown-item" onClick={() => deleteQuiz(quizId)}>
                      Delete
                    </button>
                </li>
                <li>
                    <button id="wd-publish-item-button" className="dropdown-item" onClick={handlePublish}>
                      {quiz.published ? 'Unpublish' : 'Publish'}
                    </button>
                </li>
            </ul>
        </div>
    );
}