import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivetRoute from "./PrivetRoute";
import OurProfile from "../Pages/OurProfile/OurProfile";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path: '/signIn',
                element:<SignIn></SignIn>
            },
            {
                path: '/ourProfile',
                element: <PrivetRoute><OurProfile></OurProfile></PrivetRoute>
            }
        ]
    }
])

export default router;