import { FaAlignJustify } from "react-icons/fa6";
import { Navigate, Route, Routes } from "react-router";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2 className="text-danger"><FaAlignJustify className="me-4 fs-4 mb-1" /> 
      Course 1234</h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
            <CoursesNavigation />
        </div>
        <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Zoom" element={<h1>Zoom</h1>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:id" element={<AssignmentEditor />} />
              <Route path="Assignments"
                     element={<h2>Assignments</h2>} />
              <Route path="Assignments/:id"
                     element={<h2>Assignment Editor</h2>} />    
              <Route path="Quizzes" element={<h1>Quizses</h1>} />
              <Route path="Grades" element={<Grades />} />       
            </Routes>
        </div>
       </div>
    </div>
    
);}
