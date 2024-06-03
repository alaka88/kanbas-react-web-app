import { BsCaretDownFill, BsRocketTakeoff } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import QuizControl from "./QuizControl";

export default function Quizzes() {
  return (
    <div id="wd-quizzes">
        <QuizControl /><br /><br /><br />
      <ul id="wd-quizzes-title" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" style={{ borderLeft: '4px solid green' }}>
          <div className="wd-title p-3 ps-2 bg-secondary">
            <button id="wd-quiz-title" className="btn btn-transparent">
              <BsCaretDownFill className="fs-16 me-2"/>
              <span className="fw-bold">Assignment Quizzes</span>
            </button>
          </div>
          <ul id="wd-quiz-list" className="list-group rounded-0">
            <li className="wd-quiz-list-item list-group-item p-3 ps-1 d-flex flex-column">
              <div className="d-flex align-items-center mb-2">
              <BsRocketTakeoff  className="me-3 fs-3" style={{ color: 'green' }} />
                <a className="wd-quiz-link flex-grow-1" href="#/Kanbas/Courses/1234/Assignments/123" style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>
                  Q1-HTML
                </a>
                <LessonControlButtons />
              </div>
              <span className="ms-5 small">
                <span className="text-danger">Available</span>
                <span> | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts</span>
              </span>
            </li>
            <li className="wd-quiz-list-item list-group-item p-3 ps-1 d-flex flex-column">
              <div className="d-flex align-items-center mb-2">
                <BsRocketTakeoff className="me-3 fs-3" style={{ color: 'green' }} />
                <a className="wd-quiz-link flex-grow-1" href="#/Kanbas/Courses/1234/Assignments/123" style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>
                  Q2-CSS
                </a>
                <LessonControlButtons />
              </div>
              <span className="ms-5 small">
                <span className="text-danger">Available</span>
                <span> | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts</span>
              </span>
            </li>
            <li className="wd-quiz-list-item list-group-item p-3 ps-1 d-flex flex-column">
              <div className="d-flex align-items-center mb-2">
                <BsRocketTakeoff className="me-3 fs-3" style={{ color: 'green' }} />
                <a className="wd-quiz-link flex-grow-1" href="#/Kanbas/Courses/1234/Assignments/123" style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>
                  Q3
                </a>
                <LessonControlButtons />
              </div>
              <span className="ms-5 small">
                <span className="text-danger">Available</span>
                <span> | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts</span>
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
