import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {userinfo} = useContext(AuthContext);
    if(userinfo){
        return children;
    }
    return <Navigate to='/signIn'></Navigate>
};

export default PrivetRoute;