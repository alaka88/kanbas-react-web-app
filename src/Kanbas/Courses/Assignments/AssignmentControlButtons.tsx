import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentControlButtons(){
    return(
        <div className="float-end">
  <button
  className="btn btn-transparent me-1"
  style={{ border: '2px solid rgba(0, 0, 0, 0.2)' }}
>
  <span className="w-40">40% of total</span>
</button>
  <button className="btn btn-transparent">
    <BsPlus className="fs-4" />
  </button>
  <IoEllipsisVertical className="fs-4" />
</div>
    );
}