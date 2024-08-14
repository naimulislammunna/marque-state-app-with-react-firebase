import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="p-10 text-center">
            <h1 className="text-red-600 text-lg">This Page is not found : 404</h1>
            <Link to='/'><button className="btn btn-primary">Home</button></Link>
        </div>
    );
};

export default ErrorPage;