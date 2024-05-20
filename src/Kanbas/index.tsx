import { Navigate, Route, Routes } from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "./styles.css";

export default function Kanbas() {
  return (
    <div id="wd-kanbas" className="h-100 d-flex">
      <div className="d-none d-md-block bg-black h-100 position-fixed" >
        <KanbasNavigation />
      </div>
      <div className="flex-fill p-4" style={{ marginLeft: '120px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:id/*" element={<Courses />} />            
        </Routes>
      </div>
    </div>
  );
}