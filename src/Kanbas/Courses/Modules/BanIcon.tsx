import { BsBan } from "react-icons/bs";

export default function BanIcon(){
    return (
        <span className="me-1 position-relative">
          <BsBan style={{ top: "2px" }} className="text-secondary me-1 position-absolute fs-5" />
          <BsBan className="text-white me-1 fs-6" />
        </span>
      );
    }