import { FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { createQuizzes } from "./client";

export default function QuizzesControls() {
    const {cid} = useParams();
    const router = useNavigate();

    const addQuizzes = async () => {
        const response = await createQuizzes(cid as string, {
            course: "",
            title: "New Quizzes",
            type: "Graded Quiz",
            points: 0,
            assignmentGroup: "Quizzes",
            shuffleAnswers: false,
            timeLimit: 20,
            multipleAttempts: false,
            manysAttempts: 1,
            showCorrectAnswers: true,
            accessCode: "",
            oneQuestionAtTime: false,
            webcamRequired: false,
            lockQuestionsAfterAnswering: false,
            publish: false,
            questions: [],
            available: Date.now(),
            due: Date.now(),
            until: Date.now()
        });
        console.log(response)
        if (response) {
            router(`/Kanbas/Courses/${cid}/Quizzes/Detail/${response._id}`)
        }
    }

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
                    style={{ height: '45px' }}
                    onClick={addQuizzes}
                >
                    
                    <span>+ Quiz</span>
                 
                </button>
                <button
                    id="wd-add-quiz-group"
                    className="btn btn-lg btn-secondary me-1 d-flex align-items-center"
                    style={{ height: '45px' , padding: '5px 10px'}}
                >
                    <IoEllipsisVertical className="position-relative" style={{ bottom: "1px" }} />
                </button>
            </div>
        </div>
    )
}