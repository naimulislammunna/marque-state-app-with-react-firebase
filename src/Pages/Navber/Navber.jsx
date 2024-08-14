import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";

const Navber = () => {
    const { userInfo, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
    }
    const items = <>
        <Link to='/'><button className="button">Home</button></Link>
        <Link to='/updateUser'><button className="button">Update User</button></Link>
        <Link to='/ourProfile'><button className="button">User Profile</button></Link>

    </>
    return (
        <div className="home-container">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {items}
                        </ul>
                    </div>
                    <a className=" text-3xl">Marque <span className="text-blue-800">State</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-3">
                        {items}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    {
                        userInfo ? <>
                            <button onClick={handleLogOut} className="button">Sign Out</button>
                            <h3>{userInfo.displayName}</h3>
                            <div className="w-10">
                                <img className="rounded-full"
                                    alt="Tailwind CSS Navbar component"
                                    src={userInfo.photoURL} />
                            </div>
                        </>
                            :
                            <>
                                <Link to='/register'><button className="button">Resister</button></Link>
                                <Link to='/SignIn'><button className="button">Sign In</button></Link>
                            </>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navber;