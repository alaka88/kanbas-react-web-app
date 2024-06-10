import { AiOutlineDashboard } from "react-icons/ai";
import { FaInbox } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";

export default function KanbasNavigation() {
        const { pathname } = useLocation();
        const links = [
        { label: "Account", path: "/Kanbas/Account", icon: FaRegCircleUser }, 
        { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
        { label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid },
        { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
        { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
        { label: "Labs", path: "/Labs", icon: LiaCogSolid },
        ];
    return (
      <div id="wd-kanbas-navigation" className="list-group rounded-0">
        <a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/"
           className="list-group-item bg-black border-0">
           <img src="/images/NEU.png" width="75px" style={{ marginTop: '30px' }} /></a>
        
        {links.map((link) => (
          <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
            ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
            {link.icon({ className: "fs-1 text-danger"})}
            <br />
            {link.label}
          </Link>
         ))}
    </div>
);}
