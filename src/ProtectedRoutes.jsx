import { useContext } from "react";

import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";


const ProtectedRoutes = () => {
    const { currentUser, pending, logout } = useContext(AuthContext);

  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;