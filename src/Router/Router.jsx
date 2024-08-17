import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../layout/Main";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";

const router = createBrowserRouter([
        {
            path : '/',
            element : <Main></Main>,
            children : [
                    {
                        path : '/',
                        element : <Home></Home>
                    },
                    {
                        path : '/login',
                        element : <Login></Login>
                    },
                    {
                        path  : '/signup',
                        element : <Signup></Signup>
                    }
            ]
        }
])
export default router