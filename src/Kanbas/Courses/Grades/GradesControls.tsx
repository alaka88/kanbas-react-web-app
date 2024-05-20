import { BsBoxArrowLeft, BsBoxArrowRight, BsGearFill } from "react-icons/bs";

export default function GradesControls(){
    return(
        <div id="wd-grades-controls" className="text-nowrap mt-5">
          <button id="wd-add-module-btn" className="btn btn-lg btn-secondary float-end">
           <BsGearFill className="position-relative" style={{ bottom: "1px" }} />
          </button>
        
        <div className="dropdown d-inline me-1 float-end">
        <button id="wd-exportl-btn" className="btn btn-lg btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <BsBoxArrowLeft className="me-2" style={{ fontSize: '1.5rem' }} />
          Export
        </button>
        <ul className="dropdown-menu">
          <li>
            <a id="wd-expport-items-btn" className="dropdown-item" href="#">
              N/A
            </a>
          </li>
        </ul>
        </div>
        <button id="wd-import-btn" className="btn btn-lg btn-secondary me-1 float-end "
          type="button">
          <BsBoxArrowRight className="me-2" style={{ fontSize: '1.5rem' }} />
          Import
        </button>     
        </div>
    );
}