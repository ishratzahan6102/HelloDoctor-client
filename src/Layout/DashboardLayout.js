import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Pages/Contexts/Context';
import Navbar from '../Shared/Navbar';
import useAdmin from '../useAdmin/useAdmin';
import bg from '../assets/images/bg.png'
import Footer from '../Shared/Footer';


const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)




    return (
        <div className='' style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
            <Navbar></Navbar>
            
            <div className="drawer drawer-mobile ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                    

                </div>
                
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu w-72 text-secondary font-semibold">
                    <button className="m-6 normal-case font-semibold rounded-full btn border-none text-sm bg-gradient-to-r from-primary to-secondary text-white">Check Appointment</button>
                        <li className=''><Link to='/dashboard'>Appointments</Link></li>
                            <li><Link to='/dashboard/users'>Users</Link></li>
                            <li><Link to='/dashboard/addDoctor'>Add Doctors</Link></li>
                            <li><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
                    </ul>

                </div>
                
            </div>
          
        </div>
    );
};

export default DashboardLayout;