import { FaAlignJustify } from "react-icons/fa6";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import PeopleTable from "./People/Table";
import Quizzes from "./Quizzes";
import QuizzesDetail from "./Quizzes/QuizDetails";
import QuizzesEditor from "./Quizzes/QuizEdit";
import QuizzesPreview from "./Quizzes/QuizPreview";




export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      <h2 className="text-danger"><FaAlignJustify className="me-4 fs-4 mb-1" />
      {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div/>
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
              <Route path="Quizzes" element={<Quizzes />} />
              <Route path="Quizzes/add" element={<QuizzesEditor/>}/>
                        <Route path="Quizzes/Detail/:qid" element={<QuizzesDetail/>}/>
                        <Route path="Quizzes/Edit/:qid" element={<QuizzesEditor/>}/>
                        <Route path="Quizzes/Preview/:qid" element={<QuizzesPreview/>}/>

              <Route path="Grades" element={<Grades />} />
              <Route path="People" element={<PeopleTable />} />
              <Route path="People/:uid" element={<PeopleTable />} />    
            </Routes>
        </div>
       </div>
    </div>
    
);}