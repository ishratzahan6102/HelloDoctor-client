import DashboardLayout from "../Layout/DashboardLayout";
import Allusers from "../Pages/AllUsers/allusers";
import Appointment from "../Pages/Appointment/Appointment";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import DoctorsList from "../Pages/DoctorsList/DoctorsList";
import ManageDoctors from "../Pages/ManageDoctors/ManageDoctors";
import MyAppointment from "../Pages/MyAppointment/MyAppointment";
import Payment from "../Pages/Payment/Payment";
import PaymentFail from "../Pages/Payment/PaymentFail";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess";
import PrivateRoute from "../Pages/PrivateRoute";
import DisplayError from "../Shared/DisplayError/DisplayError";
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
                path: '/doctorsList',
                element: <DoctorsList></DoctorsList>
            },
            {
                path: '/myReviews' ,
                element: <MyReviews></MyReviews>
            },
            {
                path: '/payment/success',
                element: <PaymentSuccess></PaymentSuccess>,                
            },
            {
                path: '/payment/fail',
                element: <PaymentFail></PaymentFail>,                
            }
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/users',
                element: <Allusers></Allusers>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AddDoctor></AddDoctor>
            }
            ,
            {
                path: '/dashboard/managedoctors',
                element: <ManageDoctors></ManageDoctors>
            }
            ,
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
            ,
           
            

        ]
    }
    
])