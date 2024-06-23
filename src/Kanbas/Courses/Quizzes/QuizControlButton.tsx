import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";

export default function QuizzesControlButtons() {
    return (
        <div className="float-end">
            <FaPlus/>
            <IoEllipsisVertical className="fs-4"/>
        </div>
    );
}