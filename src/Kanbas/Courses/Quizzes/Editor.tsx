import { useState } from 'react';
import { BsX } from 'react-icons/bs';
import { FaCheckCircle, FaEllipsisV, FaTimesCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { KanbasState } from '../../store';
import WYSIWYGEditor from './WYSIWYG';
import * as client from "./client";
import { setQuiz, setQuizzes } from './reducer';
export default function QuizEditor() {
  const {cid} = useParams();
  const {pathname} = useLocation();
  const qid = pathname.split("/").pop();
  const dispatch = useDispatch();
  const router = useNavigate();
  
  const quizzes = useSelector(
    (state: KanbasState) => state.quizzesReducer.quizzes
);
const quiz = useSelector(
  (state: KanbasState) => state.quizzesReducer.quiz
);
  
 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setQuiz({ ...quiz, [name]: value });
  };

 
  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  };
  const [isPublished, setIsPublished] = useState(true);
  const handleTogglePublish = (quiz: any) => {
    const updatedQuiz = {...quiz, published: !quiz.published};
    client.updateQuiz(updatedQuiz)
    .then(() => {
      const updatedQuizzes = quizzes.map(q =>
          q._id === quiz._id ? updatedQuiz : q
      );
      dispatch(setQuizzes(updatedQuizzes));
    })
    .catch(err => {
      console.error("Failed to update quiz", err);
    });
  };
  return (
    <div className="container">
    <div className="float-end">
        
          <span>
            Points {quiz.points} &nbsp;&nbsp;&nbsp;
          </span>
          <span>
          {isPublished ? (
            <FaCheckCircle className="text-success me-1" />
          ) : (
            <FaTimesCircle className="text-secondary me-1" />
          )}
          {isPublished ? "Published" : "Unpublished"}&nbsp;&nbsp;&nbsp;
          <button className="btn btn-outline-secondary">
            <FaEllipsisV />
          </button>
        </span>
        </div>  <br/><br/><hr/>
        <nav className="nav nav-tabs" style={{marginTop: "10px"}}>
                <Link to={`/Kanbas/Courses/${quiz.course}/Quizzes/newquiz/editor`} style={{color: "black"}}
                      className={`nav-link ${pathname.includes("quizdetailseditor") ? "active" : ""}`}>Details</Link>
                <Link to={`/Kanbas/Courses/${quiz.course}/Quizzes/newquiz/editor`} style={{color: "red"}}
                      className={`nav-link ${pathname.includes("quizquestionseditor") ? "active" : ""}`}>Questions</Link>
            </nav><br/>
            <div className={"mb-3"}>
                <input type="text" className="form-control" id="title" value={quiz.title} placeholder={"New Title"}
                       onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="instructions" className="form-label">Quiz Instructions</label>
                <WYSIWYGEditor value={quiz.description}
                               onChange={handleChange}/>
            </div>
            
      <div className="row mb-2">
          <div className="col-3">
              <label htmlFor="wd-points" className="col-form-label float-end">Points</label>
          </div>
          <div className="col">
              <input id="wd-points" type="number" defaultValue={quiz.points} className="form-control" name="points"  onChange={handleChange}/>
          </div>
      </div>

      <div className="row mb-2">
         <div className="col-3">
              <label htmlFor="wd-quiz-type" className="col-form-label float-end">Quiz Type</label>
         </div>
         <div className="col">
          <select className="form-select" id="quizType" value={quiz.quizType}
                        onChange={(e) => setQuiz({...quiz, quizType: e.target.value})}>
              <option value="Graded Quiz">Graded Quiz</option>
              <option value="Practice Quiz">Practice Quiz</option>
                    <option value="Graded Survey">Graded Survey</option>
                    <option value="Ungraded Survey">Ungraded Survey</option>
          </select>
         </div>
      </div>

      <div className="row mb-2">
          <div className="col-3">
              <label htmlFor="wd-group" className="col-form-label float-end">Assignment Group</label>
          </div>
          <div className="col">
              <select className="form-select" id="assignmentGroup" value={quiz.assignmentGroup}
                        onChange={(e) => setQuiz({...quiz, assignmentGroup: e.target.value})}>
                    <option value="Quizzes">Quizzes</option>
                    <option value="Assignments">Assignments</option>
                    <option value="Project">Project</option>
                    <option value="Exams">Exam</option>
                </select>
          </div>
      </div>

     
          
      <div className="row mb-2">
          <div className="col-3">
              
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                
               <div className="row mt-2">
                   <label><b>Options: </b></label>
               </div>
               <div className="row my-2 ms-1">
                    <div className="form-check my-2">
                      <input className="form-check-input" type="checkbox" 
                              name="text-entry" id="wd-text-entry" />
                      <label className="form-check-label" htmlFor="wd-text-entry">
                      Shuffle Answers </label> 
                      <div className="row mb-2">
          <div className="col-3">
              <label htmlFor="wd-group" className="col-form-label float-end">Assignment Group</label>
          </div>
          <div className="col">
              <select className="form-select" id="assignmentGroup" value={quiz.assignmentGroup}
                        onChange={(e) => setQuiz({...quiz, assignmentGroup: e.target.value})}>
                    <option value="Quizzes">Quizzes</option>
                    <option value="Assignments">Assignments</option>
                    <option value="Project">Project</option>
                    <option value="Exams">Exam</option>
                </select>
          </div>
      </div>

                    </div>           
                    <div className="form-check my-2">
                      <input className="form-check-input"  name="website-url" type="checkbox" 
                              id="wd-text-entry" />
                      <label className="form-check-label" htmlFor="wd-text-entry">
                      Time limit </label> 
                    </div>
                    
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="row mb-2">
      <div className="col-3">
            <label htmlFor="wd-assign" className="col-form-label float-end">Assign</label>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <div className="row mb-3">
               <label htmlFor="wd-assign-to" className="form-label"><b>Assign to</b></label>
               <div className="input-group">
               <button className="btn btn-light" style={{padding:'5px 10px'}}>
                  Everyone <BsX className="me-1" /></button>
                  <input id="wd-assign-to" type="text" 
                    className="form-control"/> </div>
            </div>
            <div className="row mb-3">
               <label htmlFor="wd-due-date"><b>Due</b></label>
               <input type="date"
                   id="wd-due-date"
                   className="form-control"
                   value={quiz.due} name="due" onChange={handleChange} />
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="wd-available-from"><b>Available from</b></label>
                <input type="date" id="wd-available-from" 
                     className="form-control" value={quiz.available} name="available" onChange={handleChange} /> 
              </div>
              <div className="col">
                <label htmlFor="wd-available-until"><b>Until</b></label>
                <input type="date" id="wd-available-until" 
                  className="form-control" value={quiz.until} onChange={handleChange}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-3">
        <hr/>
    </div>

    <div className="mb-2">
    <input type="button" className="btn btn-danger float-end ms-2" value="Save"
             />
          <Link key={'cancel'} to={`/Kanbas/Courses/${cid}/Quizzes`}>
            <input type="button" className="btn btn-secondary float-end" value="Cancel" />
          </Link>
      </div>

      <div className="row" style={{ height: '30px', width: '100%' }}></div>
    </div>

);
}