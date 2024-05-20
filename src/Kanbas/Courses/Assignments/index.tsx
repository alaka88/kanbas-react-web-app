import { BsCaretDownFill, BsGripVertical, BsPencilSquare } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";

export default function Assignments() {
    return (
      <div id="wd-assignments"> 
           <AssignmentControls /><br /><br /><br />
        <ul id="wd-assignments-title" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" style={{ borderLeft: '4px solid green' }}>
        <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" />
        
        <button
        className="btn btn-transparent me-1">
          <BsCaretDownFill className="fs-16"/></button>
        <span className="fw-bold">ASSIGNMENTS</span>
          <AssignmentControlButtons />
          </div>
          <ul id="wd-assignment-list" className="list-group rounded-0">
          <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex flex-column">
    <div className="d-flex align-items-center mb-2">
      <BsGripVertical className="me-2 fs-3" />
      <BsPencilSquare className="me-3 fs-3" style={{ color: 'green' }} />
      <a className="wd-assignment-link flex-grow-1" href="#/Kanbas/Courses/1234/Assignments/123"
                      style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>
        A1
      </a>     
      <LessonControlButtons />
    </div>
    <span className="ms-5 small">
    <span className="text-danger">Multiple Modules</span>
    <span> | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts</span>
  </span>
  </li>
  <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex flex-column">
    <div className="d-flex align-items-center mb-2">
      <BsGripVertical className="me-2 fs-3" />
      <BsPencilSquare className="me-3 fs-3" style={{ color: 'green' }} />
      <a className="wd-assignment-link flex-grow-1" href="#/Kanbas/Courses/1234/Assignments/123"
      style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>
        A2
      </a>
      <LessonControlButtons />
    </div>
    <span className="ms-5 small">
    <span className="text-danger">Multiple Modules</span>
    <span> | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts</span>
  </span>
  </li>
  <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex flex-column">
    <div className="d-flex align-items-center mb-2">
      <BsGripVertical className="me-2 fs-3" />
      <BsPencilSquare className="me-3 fs-3" style={{ color: 'green' }} />
      <a className="wd-assignment-link flex-grow-1" href="#/Kanbas/Courses/1234/Assignments/123"
      style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>
        A3
      </a>
      <LessonControlButtons />
      </div>
            <span className="ms-5 small">
            <span className="text-danger">Multiple Modules</span>
            <span> | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts</span>
          </span>
          </li>
        </ul>
        </li>
        </ul>
      </div>
  );}
  