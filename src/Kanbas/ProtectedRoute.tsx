import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser?.role === "FACULTY") {
    return children[0];
} else if (currentUser?.role === "STUDENT") {
    return children[1];
  } else {
    return <Navigate to="/Kanbas/Account/Signin" />;
  }
}
