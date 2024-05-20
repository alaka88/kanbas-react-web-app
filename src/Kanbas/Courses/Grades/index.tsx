import { BsFunnel } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import GradesControls from "./GradesControls";

export default function Grades(){
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
    <button id="wd-import-btn" className="btn btn-lg btn-secondary mt-3"
          type="button">
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
                    <th>
                        <div>A1 SETUP</div>
                        <div style={{ fontWeight: 'normal' }}>Out of 100</div>
                    </th>
                    <th>
                        <div>A2 HTML</div>
                        <div style={{ fontWeight: 'normal' }}>Out of 100</div>
                    </th>
                    <th>
                        <div>A3 CSS</div>
                        <div style={{ fontWeight: 'normal' }}>Out of 100</div>
                    </th>
                    <th>
                        <div>A4 BOOTSTRAP</div>
                        <div style={{ fontWeight: 'normal' }}>Out of 100</div>
                    </th>
                    </tr>
                </thead>
                <tbody>
                <tr className="text-center"><td style={{ color: 'red' }}>Jane Adams</td><td>100%</td><td>96.67%</td><td>92.18%</td><td>66.22%</td></tr>
                <tr className="text-center"><td style={{ color: 'red' }}>Christina Allen</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td></tr>
                <tr className="text-center"><td style={{ color: 'red' }}>Samreen Ansari</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td></tr>
                <tr className="text-center"><td style={{ color: 'red' }}>Han Bao</td><td>100%</td><td>100%</td><td>92.18%</td><td>98.99%</td></tr>
                <tr className="text-center"><td style={{ color: 'red' }}>Mahi Sai Srinivas Bobbili</td><td>100%</td>
                <td>
                <div className="input-group">
                    <input type="percentile" className="form-control" 
                    style={{
                        width: '80px', 
                        margin: 'auto', 
                        border: '1px solid red', 
                      }}
                    value="88.03%" />
                </div>
                    </td>
                    <td>          
                <div className="input-group">
                    <input type="percentile" className="form-control" 
                    style={{
                        width: '80px', 
                        margin: 'auto', 
                        border: '1px solid red', 
                      }}
                    value="100%" />
                </div>
                    </td>                       
                    <td>
                    <div className="input-group">
                    <input type="percentile" className="form-control" 
                    style={{
                        width: '80px', 
                        margin: 'auto', 
                        border: '1px solid red', 
                      }}
                    value="100%" />
                </div>
                </td></tr>
                <tr className="text-center"><td style={{ color: 'red' }}>Siran Cao</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td></tr>
                </tbody>
            </table>
            </div>
        </div>
   </div>
   
   </div>
  );
}