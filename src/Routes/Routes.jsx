import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
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
            }
        ]
    }
])

export default router;