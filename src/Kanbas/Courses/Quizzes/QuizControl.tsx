import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
export default function AssignmentControls(){
    return(
        <div id="wd-quizzes" className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
        <div className="position-relative">
          <input
            id="wd-search-quizz"
            className="form-control me-1"
            placeholder="Search for Quizz"
            style={{ width: '300px', height: '45px', paddingLeft: '36px', fontSize: '16px', background: '#fff' }}
          />
          <FaSearch className="position-absolute" style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#ccc', fontSize: '16px' }} />
        </div>
      </div>
      
            <div className="d-flex">
                <button
                    id="wd-add-quizz"
                    className="btn btn-lg btn-danger d-flex align-items-center me-2"
                    style={{ height: '45px' }}
                >
                    <FaPlus className="position-relative me-1" style={{ bottom: "1px" }} />
                    <span>Quizz</span>
                </button>
                <button
                    id="wd-add-quizz-group"
                    className="btn btn-lg btn-secondary me-1 d-flex align-items-center"
                    style={{ height: '45px' }}
                >
                    <IoEllipsisVertical className="position-relative" style={{ bottom: "1px" }} />
                </button>
            </div>
        </div>
    );
}