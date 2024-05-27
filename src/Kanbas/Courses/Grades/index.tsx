import { BsFunnel } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { assignments, enrollments, grades, users } from "../../Database";
import GradesControls from "./GradesControls";

export default function Grades(){
    const { cid } = useParams();
    const filteredEnrollments = enrollments.filter(enrollment => enrollment.course === cid);
    const students = filteredEnrollments.map(enrollment => {
        const student = users.find(user => user._id === enrollment.user); 
        return student ? { ...student, grades: [] } : null;
    }).filter(Boolean);
    const assignmentsList = assignments.filter(assignment => assignment.course === cid);
    const gradesList = students.map(student => { 
        const studentGrades = assignmentsList.map(assignment => {
            const grade = grades.find(g => g.student === student!._id && g.assignment === assignment._id);
            return grade ? grade.grade : 'N/A'; 
        });
        return { ...student, grades: studentGrades }; 
    });
    const showAssignments = assignmentsList.length > 0;

    return(
       <div id="wd-grades">
        <GradesControls /><br /><br /><br />
        <div className="row mt-4">
        <div className="col">
          <div className="row mb-1">
           <div className="col">
             <label htmlFor="wd-students-name"><b>Student Names</b></label>
           <div id="wd-students" className="position-relative">
           <FaSearch 
            className="position-absolute" 
            style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#ccc', fontSize: '16px' }} 
            />
            <select className="form-control ps-5 ">
                <option selected>Search Students</option>
            </select>
          </div>
         </div>
        <div className="col">
          <label htmlFor="wd-assignments-name">
            <b>Assignment Names</b></label>
           <div id="wd-assignments" className="position-relative">
            <FaSearch 
                className="position-absolute" 
                style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#ccc', fontSize: '16px' }} 
            />
             <select className="form-control ps-5">
             <option selected>Search Assignmnets</option>
            </select>
           </div>
          </div>
        </div>
      </div>
    </div>
    <button id="wd-import-btn" className="btn btn-lg btn-secondary mt-3" type="button">
          <BsFunnel className="me-2" style={{ fontSize: '1.5rem' }} />
          Apply Filters
        </button>
      
        <div className="row my-3">
            <div id="wd-grades-tables">
                <div className="table-responsive">
                    <table className="table table-striped table-bordered mt-2">
                        <thead>
                            <tr className="table-secondary text-center">
                                <th style={{ verticalAlign: 'middle' }}>Student Name</th>
                                {assignmentsList.map((assignment) => (
                                    <th key={assignment._id}>{assignment.title}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {gradesList.map((student) => (
                                <tr key={student._id}>
                                    <td>{student.firstName} {student.lastName}</td>
                                    {showAssignments &&
                                    student.grades.map((grade, index) => (
                                        <td key={index}>{grade}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
);
}