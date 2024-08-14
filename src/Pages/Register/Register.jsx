import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";

const Register = () => {
    const user = useContext(AuthContext);
    return (
        <div>
            register user
        </div>
    );
};

export default Register;