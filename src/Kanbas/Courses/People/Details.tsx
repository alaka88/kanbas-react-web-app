import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaCheck, FaPencil } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import * as client from "./client";
export default function PeopleDetails({ fetchUsers }:{ fetchUsers: () => void; }) {
    const navigate = useNavigate();
    const deleteUser = async (uid: string) => {await client.deleteUser(uid);
        fetchUsers();
        navigate(`/Kanbas/Courses/${cid}/People`);
        };
const { uid, cid } = useParams();
const [user, setUser] = useState<any>({});
const [name, setName] = useState("");
const [role, setRole] = useState("");
const [email, setEmail] = useState("");
const [editing, setEditing] = useState(false);
const [editEmail, setEditEmail] = useState(false);
const [editRole, setEditRole] = useState(false);
const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { ...user, firstName, lastName, email,role };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    setEditEmail(false);
    setEditRole(false);
    fetchUsers();
    navigate(`/Kanbas/Courses/${cid}/People`);
    };

const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);

    };
useEffect(() => {
    if (uid) fetchUser();
    }, [uid]);
    if (!uid) return null;
return (
<div className="position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
    <Link to={`/Kanbas/Courses/${cid}/People`} className="btn position-fixed end-0 top-0">
        <IoCloseSharp className="fs-1" /> 
    </Link>
    <div className="text-center mt-2"> <FaUserCircle className="text-secondary me-2 fs-1" /> </div><hr />
    <div className="text-danger fs-4"> 
    {!editing && (
        <FaPencil onClick={() => setEditing(true)} className="float-end fs-5 mt-2" /> )}
    {editing && (
        <FaCheck onClick={() => saveUser()} className="float-end fs-5 mt-2 me-2" /> )}
    {!editing && (
        <div onClick={() => setEditing(true)}> {user.firstName} {user.lastName} </div>)}
    {user && editing && (
        <input className="form-control w-50" defaultValue={`${user.firstName} ${user.lastName}`}
             onChange={(e) => setName(e.target.value)}
             onKeyDown={(e) => {if (e.key === "Enter") { saveUser(); }}}/>
    )}
     {!editEmail && (
                    <FaPencil onClick={() => setEditEmail(true)} className="float-end fs-5 mt-2" />
                )}
                {editEmail && (
                    <FaCheck onClick={saveUser} className="float-end fs-5 mt-2 me-2" />
                )}
                {!editEmail && (
                    <div onClick={() => setEditEmail(true)}>{user.email}
                    </div>
                )}
                {user && editEmail && (
                    <input
                        type="email"
                        className="form-control w-50"
                        defaultValue={user.email}
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                saveUser();
                            }}}/>
                )}
                {!editRole && (
                    <FaPencil onClick={() => setEditRole(true)} className="float-end fs-5 mt-2" />
                )}
                {editRole && (
                    <FaCheck onClick={saveUser} className="float-end fs-5 mt-2 me-2" />
                )}
                {!editRole && (
                    <div onClick={() => setEditRole(true)}>{user.role}
                    </div>
                )}
                {user && editRole && (
                    <select
                        className="form-control w-50"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                saveUser();
                            }}}>
                        <option value="STUDENT">STUDENT</option>
                        <option value="FACULTY">FACULTY</option>
                        <option value="USER">USER</option>
                    </select>
                )}
</div>
 <b>Login ID:</b> {user.loginId} <br />
<b>Section:</b> {user.section} <br /> <b>Total Activity:</b> {user.totalActivity} 
<hr />
<button onClick={() => deleteUser(uid)} className="btn btn-danger float-end" > Delete </button>
<button onClick={() => navigate(`/Kanbas/Courses/${cid}/People`)}
className="btn btn-secondary float-start float-end me-2" > Cancel </button>
</div> );}