import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
export default function AssignmentControls(){
    return(
        <div id="wd-assignments" className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
        <div className="position-relative">
          <input
            id="wd-search-assignment"
            className="form-control me-1"
            placeholder="Search..."
            style={{ width: '300px', height: '45px', paddingLeft: '36px', fontSize: '16px', background: '#fff' }}
          />
          <FaSearch className="position-absolute" style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#ccc', fontSize: '16px' }} />
        </div>
      </div>
      
            <div className="d-flex">
                <button
                    id="wd-add-assignment-group"
                    className="btn btn-lg btn-secondary me-1 d-flex align-items-center"
                    style={{ height: '45px' }}
                >
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    <span>Group</span>
                </button>
                <button
                    id="wd-add-assignment"
                    className="btn btn-lg btn-danger d-flex align-items-center"
                    style={{ height: '45px' }}
                >
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    <span>Assignment</span>
                </button>
            </div>
        </div>
    );
}