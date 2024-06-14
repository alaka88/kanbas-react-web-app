import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function QuizControlButtons({ quizId, deleteQuiz }: { quizId: string; deleteQuiz: (quizId: string) => void; } )
{
    return(
        <div className="float-end">
                    <GreenCheckmark />
            <button className="btn btn-transparent" style={{ padding: '1px' }} type="button" data-bs-toggle="dropdown">
                    <IoEllipsisVertical className="fs-4" />
                    </button>
                    <ul className="dropdown-menu">
              <li>
                <a id="wd-edit-items-btn" className="dropdown-item" href="#">
                  Edit
                </a>
              </li>
              <li>
                <a id="wd-delete-item-button" className="dropdown-item" onClick={() => deleteQuiz(quizId)}>
                  Delete
                </a>
              </li>
              <li>
                <a id="wd-publish-item-button" className="dropdown-item" href="#">
                Publish
                </a>
              </li>
            </ul>
                  </div>
       
    )
}