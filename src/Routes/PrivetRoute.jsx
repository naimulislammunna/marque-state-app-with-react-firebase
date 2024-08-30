import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {userInfo} = useContext(AuthContext);
    const location = useLocation();

    if(userInfo){
        return children;
    }
    return <Navigate to='/signIn' state={location.pathname} replace></Navigate>
};

export default PrivetRoute;