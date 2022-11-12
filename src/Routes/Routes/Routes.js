import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layouts/Main"
import Appointment from "../../Pages/Appointment/Appointment/Appointment"
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Logs/Login/Login"
import Register from "../../Pages/Logs/Register/Register"

export const router = createBrowserRouter([
    {
        path: "/",
        element : <Main></Main>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/register",
                element : <Register></Register>
            },
            {
                path : "/appointment",
                element : <Appointment></Appointment>
            },
        ]
    }
])