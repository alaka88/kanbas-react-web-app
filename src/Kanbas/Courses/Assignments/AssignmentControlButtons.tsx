import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentControlButtons(){
    return(
        <div className="float-end">
             
            <button className="btn btn-transparent">
                <BsPlus className="fs-4" />
            </button>
            <IoEllipsisVertical className="fs-4" />
            </div>
    );
}