import { FaPencil } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import './Details.css';
export default function QuizDetails() {
    const { cid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const cidQuizzes= quizzes.filter((quiz: any) => quiz.course === cid);
    const dispatch = useDispatch();
        return (
            <div className="container">
                <div id="wd-bt" className="d-flex justify-content-center align-items-center">
               
                    <button className="btn btn-lightgrey me-3" onClick={() => alert("Preview Clicked!")}>Preview</button>
                    <span className="text-muted"></span>
                    <button type="button" className="btn btn-lightgrey" onClick={() => alert("Edit Clicked!")}>
                        <FaPencil /> Edit
                    </button>
                </div><hr/>
                <h2><b>Q</b></h2>

            </div>
        );
    }