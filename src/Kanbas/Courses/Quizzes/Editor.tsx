import { useEffect, useState } from 'react';
import { BsX } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { addQuiz, updateQuiz } from './reducer';
export default function QuizEditor() {
  const {cid} = useParams();
  const {pathname} = useLocation();
  const qid = pathname.split("/").pop();
  const dispatch = useDispatch();
  const router = useNavigate();
  const [quiz, setQuiz] = useState({
    course: qid,
    title: '',
    description: '',
    points: '',
    due: '',
    available: '',
    until: ''
  });
  const quizzes = useSelector((state: any) => state.quizzesReducer.quizzes);
  const existingQuiz = quizzes.find((quiz:any) => quiz._id === qid);
  useEffect(() => {
    if (existingQuiz) {
      setQuiz(existingQuiz);
    }
  }, [existingQuiz]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setQuiz({ ...quiz, [name]: value });
  };

  const handleAddOrUpdateQuiz = () => {
    if (existingQuiz) {
      dispatch(updateQuiz(quiz));
    } else {
      dispatch(addQuiz(quiz));
    }
    router(`/Kanbas/Courses/${cid}/quizzess`);
  }
  return (
    <div className="container">
    <div id="wd-quizzes-editor">
        <div className="row input-group mb-3">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input type="text" className="form-control" id="wd-name" name="title" value={quiz?.title}/>
        </div>

        <div className="row input-group mb-3">
            <textarea className="form-control" id="wd-description" 
            style={{ width: '100%', height: '300px' }} ></textarea>
        </div>        
      
      <div className="row mb-2">
          <div className="col-3">
              <label htmlFor="wd-points" className="col-form-label float-end">Points</label>
          </div>
          <div className="col">
              <input id="wd-points" type="number" className="form-control" name="points" onChange={handleChange} value={quiz?.points}/>
          </div>
      </div>
      
      <div className="row mb-2">
          <div className="col-3">
              <label htmlFor="wd-group" className="col-form-label float-end">Assignment Group</label>
          </div>
          <div className="col">
              <select className="form-control">
              <option selected>ASSIGNMENTS</option>
              </select>
          </div>
      </div>

      <div className="row mb-2">
         <div className="col-3">
              <label htmlFor="wd-display-grade-as" className="col-form-label float-end">Display Grade as</label>
         </div>
         <div className="col">
          <select className="form-control">
              <option selected>Percentage</option>
          </select>
         </div>
      </div>
          
      <div className="row mb-2">
          <div className="col-3">
              <label htmlFor="wd-submission-type" className="col-form-label float-end">Submission Type</label>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <select id="wd-submission-type" style={{width:'95%'}} className="form-control m-auto">
                    <option selected>Online</option>
                 </select>
                </div>
               <div className="row mt-4">
                   <label><b>Online Entry Options: </b></label>
               </div>
               <div className="row my-2 ms-1">
                    <div className="form-check my-2">
                      <input className="form-check-input" type="checkbox" 
                              name="text-entry" id="wd-text-entry" />
                      <label className="form-check-label" htmlFor="wd-text-entry">
                      Text Entry </label> 
                    </div>           
                    <div className="form-check my-2">
                      <input className="form-check-input"  name="website-url" type="checkbox" 
                              id="wd-text-entry" />
                      <label className="form-check-label" htmlFor="wd-text-entry">
                      Website URL </label> 
                    </div>
                    <div className="form-check my-2">
                      <input className="form-check-input" type="checkbox" 
                              name="media-recordings" id="wd-media-recordings" />
                      <label className="form-check-label" htmlFor="wd-media-recordings">
                      Media Recordings </label> 
                    </div>
                    <div className="form-check my-2">
                      <input className="form-check-input" type="checkbox" 
                              name="student-annotation" id="wd-student-annotation" />
                      <label className="form-check-label" htmlFor="wd-student-annotation">
                      Student Annotation </label> 
                    </div>
                    <div className="form-check my-2">
                      <input className="form-check-input" type="checkbox" 
                              name="file-upload" id="wd-file-upload" />
                      <label className="form-check-label" htmlFor="wd-file-upload">
                      File Uploads </label> 
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
            onClick={handleAddOrUpdateQuiz} />
          <Link key={'cancel'} to={`/Kanbas/Courses/${cid}/Quizzes`}>
            <input type="button" className="btn btn-secondary float-end" value="Cancel" />
          </Link>
      </div>

      <div className="row" style={{ height: '30px', width: '100%' }}></div>
    </div>
  </div>
);
}