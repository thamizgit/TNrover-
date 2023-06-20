import {Outlet,Navigate,useLocation} from "react-router-dom";
import React from "react";
import useAuth from "./useAuth";

const RequireAuth = () => {
    const {auth} = useAuth();
    const currLocation = useLocation();
    return(
        auth.username ? <Outlet /> : <Navigate to="/signin" state={{from:currLocation}} replace />
    )
}
export default RequireAuth