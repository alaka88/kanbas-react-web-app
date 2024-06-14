import { useParams } from "react-router";
import { Link, useLocation } from "react-router-dom";
import { courses } from "../../Database";
import "./index.css";
export default function CoursesNavigation() {
   const { cid } = useParams();
   const course = courses.find((course) => course._id === cid);
   const { pathname } = useLocation();
   const links = [
      {label: "Home", path: `/Kanbas/Courses/${course?._id}/Home`},
      {label: "Modules", path: `/Kanbas/Courses/${course?._id}/Modules`},
      {label: "Piazza", path: `/Kanbas/Courses/${course?._id}/Piazza`},
      {label: "Zoom", path: `/Kanbas/Courses/${course?._id}/Zoom`},
      {label: "Assignments", path: `/Kanbas/Courses/${course?._id}/Assignments`},
      {label: "Quizzes", path: `/Kanbas/Courses/${course?._id}/Quizzes`},
      {label: "Grades", path: `/Kanbas/Courses/${course?._id}/Grades`},
      {label: "People", path: `/Kanbas/Courses/${course?._id}/People`},
   ];   
    return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
   {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item text-danger border border-0
              ${pathname.includes(link.label) ? "text-black bg-white" : "text-danger bg-white"}`}> 
          {link.label}
        </Link>
      ))}      
    </div>
  );}  
  