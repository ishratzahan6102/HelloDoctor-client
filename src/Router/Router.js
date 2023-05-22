import DashboardLayout from "../Layout/DashboardLayout";
import Allusers from "../Pages/AllUsers/allusers";
import Appointment from "../Pages/Appointment/Appointment";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../Pages/ManageDoctors/ManageDoctors";
import MyAppointment from "../Pages/MyAppointment/MyAppointment";
import Payment from "../Pages/Payment/Payment";
import PrivateRoute from "../Pages/PrivateRoute";
import AdminRoute from "./AdminRoute/AdminRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const { default: Home } = require("../Pages/Home");
const { default: Login } = require("../Pages/Login");
const { default: MyReviews } = require("../Pages/MyReviews");
const { default: Signup } = require("../Pages/Signup");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/myReviews' ,
                element: <MyReviews></MyReviews>
            },
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><Allusers></Allusers></AdminRoute>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            }
            ,
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            }
            ,
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoute><Payment></Payment></AdminRoute>
            }
        ]
    }
    
])