
import moment from 'moment';
import { useEffect } from "react";
import { BsCaretDownFill, BsRocketTakeoff } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import * as client from "./client";
import { deleteQuizzes, setQuizzes } from "./reducer";

import { useNavigate } from "react-router-dom";
import LessonControlButtons from "./LessonControlButton";
import QuizzesControls from "./QuizControl";

export default function Quizzes() {
    const {cid} = useParams();
    const router = useNavigate();
    const {quizzes} = useSelector((state: any) => state.quizzesReducer);
    const cidQuizzes = quizzes.filter((quizzes: any) => quizzes.course === cid);
    const dispatch = useDispatch();

    const {currentUser} = useSelector((state: any) => state.accountReducer);

    useEffect(() => {
        fetchQuizzes();
    }, []);

    const fetchQuizzes = async () => {
        const quizzes = await client.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
    };

    const removeQuizzes = async (moduleId: string) => {
        await client.deleteQuizzes(moduleId);
        dispatch(deleteQuizzes(moduleId));
    };

    const setPublished = async (quizzesId: string, published: boolean) => {
        await client.updateQuizzes({
            _id: quizzesId,
            publish: published
        });
        fetchQuizzes();
    };

    const handleAvailable = (item: any) => {
       
        if (moment(item.available).isAfter(moment())) {
            return "Not available until " + moment(item.available).format("MMM Do YYYY, h:mm a");
        } else if (moment(item.available).isBefore(moment()) && moment(item.until).isAfter(moment())) {
            return "Available";
        } else {
            return "Closed";
        }
    }

    const handleClickItem = (quizzes: any) => {
        const url = `/Kanbas/Courses/${cid}/Quizzes/Detail/${quizzes._id}`
        if (currentUser && currentUser.role === "STUDENT") {
            if (handleAvailable(quizzes) == "Available") {
                router(url)
            } else if (handleAvailable(quizzes) == "Closed") {
                alert("Quizzes is closed");
            } else {
                alert("Quizzes is not available yet");
            }
        } else {
            router(url)
        }
    }

    return (
        <div id="wd-quizzess">
            {
                currentUser && currentUser.role === "FACULTY" && (
                    <QuizzesControls/>
                )
            }
<br /><br /><br />
<ul id="wd-quizzes-title" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" style={{ borderLeft: '4px solid green' }}>
          <div className="wd-title p-3 ps-2 bg-secondary">
            <button id="wd-quiz-title" className="btn btn-transparent">
              <BsCaretDownFill className="fs-16 me-2"/>
              <span className="fw-bold">Assignment Quizzes</span>
            </button>
          </div>
                {
                    cidQuizzes.length === 0 && (
                        <span>
                            Click on the "+Quiz" button to add a new Quizzes.
                        </span>
                    )
                }
 <ul id="wd-quiz-list" className="list-group rounded-0">
                        {cidQuizzes && cidQuizzes.map((item: any) => (
                            <li className="wd-quiz-list-item list-group-item p-3 ps-1 d-flex flex-column" key={item._id}>
                                <div className="d-flex align-items-center mb-2">
                                    <BsRocketTakeoff className="me-3 fs-3" style={{ color: 'green' }} />
                                    <h5 className="wd-quiz-link flex-grow-1" onClick={() => handleClickItem(item)}>
                                        <b>{item.title}</b>
                                    </h5>
                                    <div className="ms-auto">
                                        <LessonControlButtons quizzesId={item._id} deleteQuizzes={removeQuizzes} published={item?.publish} setPublished={setPublished} />
                                    </div>
                                </div>
                                <p className="small ms-4 mb-2">
                                    <b>{handleAvailable(item)}</b>
                                    | <b>Due</b> {moment(item.available).format("MMM D[ at ]ha")}
                                    | {item?.points} pts
                                    | {item?.questions?.length || 0} Questions
                                </p>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}