import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons(){
    return(
        <div className="float-end">
      <GreenCheckmark />
      <button
      type="button"
      className="btn btn-transparent p-0"
      style={{ backgroundColor: 'transparent', border: 'none' }}
    >
      <BsPlus className="fs-4" />
    </button>
      <IoEllipsisVertical className="fs-4" />
    </div>
    );
}