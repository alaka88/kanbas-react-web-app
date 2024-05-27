import { BsCaretDownFill, BsGripVertical, BsPencilSquare } from "react-icons/bs";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { assignments } from "../../Database";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";

export default function Assignments() {
  const { cid } = useParams();
  const courseAssignments = assignments.filter((assignment) => assignment.course === cid);

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
    };   
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
  }

    return (
      <div id="wd-assignments">      
        <AssignmentControls /><br /><br /><br />
        <ul id="wd-assignments-title" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" style={{ borderLeft: '4px solid green' }}>
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              <button id="wd-assignment-title" className="btn btn-transparent ">
                <BsCaretDownFill className="fs-16 me-2"/>
                <span className="fw-bold">ASSIGNMENTS</span>
              </button>               
              <AssignmentControlButtons />
              <div
                  className="me-1 float-end " 
                  style={{
                    padding: '5px 10px',
                    border: '2px solid rgba(0, 0, 0, 0.2)',
                    borderRadius: '40px',
                    display: 'inline-block',
                  }}>
                  <span className="w-40" style={{ fontSize: '16px' }}>40% of total</span>
                </div>
            </div>
              <ul id="wd-assignment-list" className="list-group rounded-0">
              {courseAssignments.map((assignment, index) => (
                <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex flex-column">
                  <div className="d-flex align-items-center mb-2">
                    <BsGripVertical className="me-2 fs-3" />
                    <BsPencilSquare className="me-3 fs-3" style={{ color: 'green' }} />
                    <Link className="wd-assignment-link flex-grow-1" 
                          to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                          style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>
                     {`A${index + 1}`}
                    </Link>     
                    <LessonControlButtons />
                  </div>
              <span className="ms-5 small">
              <span className="text-danger">Multiple Modules </span>
                  | <b>Not available until</b> {formatDate(assignment.available)} at 12:00am | <b>Due</b> {formatDate(assignment.due)} at 11:59pm | {assignment.points} pts
              </span>
              </li>
               ))}
            </ul>
          </li>
        </ul>
     </div>
  );}

  