import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
//import * as db from "./Database";
import * as client from "./Courses/client";
import KanbasNavigation from "./Navigation";
import store from "./store";
import "./styles.css";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const fetchCourses = async () => {
  const courses = await client.fetchAllCourses();
  setCourses(courses);
  };
  
  const [course, setCourse] = useState<any>({
        _id: "0", 
        name: "New Course", 
        number: "New Number",
        startDate: "2023-09-10", 
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg", 
        description: "New Description"
  });
    const addNewCourse = async() => {
    const newCourse = await client.createCourse(course);
            setCourses([...courses, newCourse]);
    };   
    const deleteCourse = async (courseId: string) => {
      await client.deleteCourse(courseId);
      setCourses(courses.filter((course) => course._id !== courseId));
      };
    const updateCourse = async () => {
      await client.updateCourse(course);
        setCourses(
        courses.map((c) => {
        if (c._id === course._id) {
        return course;
        } else {
        return c;
        }
        })
        );
        };
        useEffect(() => {
          fetchCourses();
          }, []);
  return (
    <Provider store={store}>
    <div id="wd-kanbas" className="h-100 d-flex">
      <div className="d-none d-md-block bg-black h-100 position-fixed" >
        <KanbasNavigation />
      </div>
      <div className="flex-fill p-4" style={{ marginLeft: '120px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard
          courses={courses}
          course={course}
          setCourse={setCourse}
          addNewCourse={addNewCourse}
          deleteCourse={deleteCourse}
          updateCourse={updateCourse} />
          } />
          <Route path="Courses/:cid/*" element={<Courses courses={courses}/>} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
          <Route path="Inbox" element={<h1>Inbox</h1>} />           
        </Routes>
      </div>
    </div>
    </Provider>
  );
}