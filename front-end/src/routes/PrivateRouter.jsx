import { useContext } from "react";
import { UserContext } from "../context/user/userContext"
import { Navigate } from "react-router-dom";

export const PrivateRouter = ({children}) => {
    const {user} = useContext(UserContext);
    return user ? children : <Navigate to="/login"/>
}